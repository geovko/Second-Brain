const router = require("express").Router();

// Import modular routers for /api
const notesRouter = require("./notes");

router.use("/notes", notesRouter);

module.exports = router;
