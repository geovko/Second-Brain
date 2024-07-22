const api = require("express").Router();
const fs = require("fs");

// GET /api/notes
// reads db.json and returns all saved notes as JSON
api.get("/api/notes", (req, res) => {
  fs.readFile("db.json", (err, data) => {
    console.log("hide");
    if (err) {
      console.error(err);
    } else {
      const prevNotes = JSON.parse(data);
      console.log(prevNotes);
      return prevNotes;
    }
  });
});

// POST /api/notes
// receives a new note, adding it to the dbjson file
api.post("/api/notes", (req, res) => {
  fs.appendFile("db.json", req.body, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const prevNotes = JSON.parse(data);
      prevNotes.push(req.body);
      console.log(req.body);
      writeToFile("./db/db.json", prevNotes);
    }
  });
});

// BONUS: DELETE /api/notes/:id
// reads all notes from db.json and removes the note with the given id property

module.exports = api;
