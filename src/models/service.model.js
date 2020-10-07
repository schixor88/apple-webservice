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
  dbConnect.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Services all: ", res);
    result(null, res);
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

module.exports = Service;
