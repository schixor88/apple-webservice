var dbConnect = require("../../dbService.js");

var tableName = "Doctors";

var Doctor = function (doctor) {
  (this.doctor_nmc = doctor.doctor_nmc),
    (this.doctor_name = doctor.doctor_name),
    (this.doctor_university = doctor.doctor_university),
    (this.doctor_description = doctor.doctor_description),
    (this.doctor_position = doctor.doctor_position),
    (this.doctor_available = doctor.doctor_available),
    (this.doctor_contact = doctor.doctor_contact);
};

Doctor.getAll = (result) => {
  dbConnect.query(`Select * from ${tableName}`, (err, res) => {
    if (err) {
      console.log("error ", err);
      result(null, err);
      return;
    }
    console.log("Doctors all: ", res);
    result(null, res);
  });
};

Doctor.getOne = (id, result) => {
  dbConnect.query(
    `Select * from ${tableName} where doctor_nmc = ${id}`,
    (err, res) => {
      if (err) {
        console.log("error ", err);
        result(null, err);
        return;
      }
      console.log("Doctors all: ", res);
      result(null, res);
    }
  );
};

module.exports = Doctor;
