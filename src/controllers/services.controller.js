const Service = require("../models/service.model"); //Retrieve all Services from the database.

exports.findAll = (req, res) => {
  Service.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieveing all services.",
      });
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Service.getOne(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found WebContent with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving WebContent with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.findChildren = (req, res) => {
  Service.getChildren(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found WebContent with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving WebContent with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

exports.findActualParents = (req, res) => {
  Service.getActualParents((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieveing all services.",
      });
    } else res.send(data);
  });
};
