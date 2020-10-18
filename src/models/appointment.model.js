var dbConnect = require("../../dbService.js");
var appointmentTable = "Appointment";
var doctorTable = "Doctors";

var Appointment = function (appointment) {
  (this.appointment_id = appointment.appointment_id),
    (this.appointment_name = appointment.appointment_name),
    (this.appointment_doctor_nmc = appointment.appointment_doctor_nmc);
};

Appointment.getAll = (result) => {
  dbConnect.query(`SELECT * FROM ${appointmentTable}`, (err, res) => {
    if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
    }

    console.log("Appointment all: ", res);
    result(null, res);
});
};

Appointment.create = (appointment, result) => {
  dbConnect.query(`INSERT INTO ${appointmentTable} SET ?`, appointment, (err, res)=>{
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
  }
  result(null, {message: "Appointment Created",id: res.insertId, ...appointment});
  })
};

Appointment.getAppointed = (result) =>{
  dbConnect.query(`select * from ${appointmentTable} join ${doctorTable} on Appointment.appointment_doctor_nmc = Doctors.doctor_nmc;`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
  }
  console.log("Appointment all: ", res);
    result(null, res);
    
  });
}

module.exports = Appointment;