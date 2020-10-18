const express = require("express");
const router = express.Router();

const doctorController = require("../controllers/doctors.controller");

router.route("/").get(doctorController.findAll);

router.route("/:id").get(doctorController.findOne);

module.exports = router;
