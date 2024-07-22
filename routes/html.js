const pages = require("express").Router();

// Get /notes returns notes.html
pages.get("/notes", (req, res) => {});

// Get * returns index.html
pages.get("/", (req, res) => {});

module.exports = pages;
