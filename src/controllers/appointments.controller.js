const Appointment = require("../models/appointment.model");

exports.findAll = (req, res)=>{
    Appointment.getAll((err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured while retrieveing."
            });
            
        }
        else res.send(data);
     })
};

exports.findAppointed = (req,res) =>{
    Appointment.getAppointed((err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "Some error occured while appointed list."
            });
            
        }
        else res.send(data);
    })
}

exports.create = (req, res) => {

    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
            }); 
    }

    const appointment = new Appointment({
        appointment_id : req.body.appointment_id,
        appointment_name: req.body.appointment_name,
        appointment_doctor_nmc: req.body.appointment_doctor_nmc,
        appointment_date: req.body.appointment_date,
        appointment_time: req.body.appointment_time,
        appointment_accept: req.body.appointment_accept,
    });

    Appointment.create(appointment, (err, data)=> {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the webcontent."
        });
        else res.send(data);
    });

};