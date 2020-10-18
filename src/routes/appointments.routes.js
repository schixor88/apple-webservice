const express = require("express");
const router = express.Router();

const appointmentsController = require("../controllers/appointments.controller");

router.route("/").get(appointmentsController.findAll);

// router.route("/:id").get(appointmentsController.findOne);

router.route("/").post(appointmentsController.create);
router.route("/appointed").get(appointmentsController.findAppointed);

module.exports = router;
