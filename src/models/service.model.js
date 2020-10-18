var dbConnect = require("../../dbService.js");

var tableName = "Services";

var Service = function (service) {
  (this.service_id = service.service_id),
    (this.service_name = service.service_name),
    (this.service_description = service.service_description),
    (this.service_start_price = service.service_start_price),
    (this.service_end_price = service.service_end_price),
    (this.service_parent_id = service.service_parent_id);
};

Service.getAll = (result) => {
  var response=null;
  dbConnect.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    // console.log("Services all: ", res);
    // result(null, res);

    response = res;
    var tree = unflatten(response)
    console.log("Unflattened all, ",tree)
    result(null, tree);
  });
};

Service.getChildren = (service_parent_id, result) => {
  dbConnect.query(
    `Select * from ${tableName} where service_parent_id=${service_parent_id}`,
    (err, res) => {
      if (err) {
        console.log("error", err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};

Service.getOne = (service_id, result) => {
  dbConnect.query(
    `Select * from ${tableName} where service_id=${service_id}`,
    (err, res) => {
      if (err) {
        console.log("error", err);
        result(null, err);
        return;
      }
      result(null, res);
    }
  );
};

Service.getActualParents = (result) => {
  dbConnect.query(
    `Select * from ${tableName} where service_parent_id is null`,
    (err, res) => {
      if (err) {
        console.log("error", err);
        result(null, err);
        return;
      }
      console.log("Parent Services: ", res);
      result(null, res);
    }
  );
};



function unflatten(arr) {
  var tree = [],
    mappedArr = {},
    arrElem,
    mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.service_id] = arrElem;
    mappedArr[arrElem.service_id]['children'] = [];
  }


  for (var service_id in mappedArr) {
    if (mappedArr.hasOwnProperty(service_id)) {
      mappedElem = mappedArr[service_id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.service_parent_id) {
        mappedArr[mappedElem['service_parent_id']]['children'].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

module.exports = Service;
