const router = require("express").Router();

// Import modular routers for /html and /api
const htmlRouter = require("./html");
const apiRouter = require("./api");

router.use("/html", htmlRouter);
router.use("/api", apiRouter);

module.exports = router;
