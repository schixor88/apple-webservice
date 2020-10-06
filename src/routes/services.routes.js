const express = require("express");

const router = express.Router();

const serviceController = require("../controllers/services.controller");

router.route("/").get(serviceController.findAll);

module.exports = router;
