const notes = require("express").Router();
const fs = require("fs");

// GET /api/notes
// reads db.json and returns all saved notes as JSON
notes.get("/", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const prevNotes = JSON.parse(data);
      res.send(prevNotes);
    }
  });
});

// POST /api/notes
// receives a new note, adding it to the dbjson file
notes.post("/", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const prevNotes = JSON.parse(data);
      prevNotes.push(req.body);
      fs.writeFile("./db/db.json", JSON.stringify(prevNotes), (err, data) => {
        console.log('File appended successfully!');
      });
    }
  });
});

// BONUS: DELETE /api/notes/:id
// reads all notes from db.json and removes the note with the given id property

module.exports = notes;
