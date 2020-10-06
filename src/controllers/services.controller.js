const Service = require("../models/service.model"); //Retrieve all WebContent from the database.

exports.findAll = (req, res) => {
  Service.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieveing webContent.",
      });
    } else res.send(data);
  });
};
