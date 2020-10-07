const express = require("express");

const router = express.Router();

const serviceController = require("../controllers/services.controller");

router.route("/all").get(serviceController.findAll);

router.route("/").get(serviceController.findActualParents);

router.route("/:id").get(serviceController.findOne);

router.route("/child/:id").get(serviceController.findChildren);

module.exports = router;
