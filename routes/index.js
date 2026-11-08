const router = require("express").Router();

const usersRouter = require("./users");
const fdaRouter = require("./fda");

router.use("/", usersRouter);

router.use("/api/fda", fdaRouter);

module.exports = router;
