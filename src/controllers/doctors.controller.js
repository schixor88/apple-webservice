const Doctor = require("../models/doctor.model");

exports.findAll = (req, res) => {
  Doctor.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Error retreving doctors",
      });
    } else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Doctor.getOne(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Doctor with nmc id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Doctor with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
