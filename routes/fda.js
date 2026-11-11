const router = require("express").Router();

const auth = require("../middlewares/auth");

const { getDevices } = require("../controllers/fdaController");

router.get("/devices", auth, getDevices);

module.exports = router;
