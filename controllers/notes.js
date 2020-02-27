var express = require("express");
var db = require("../models");
var router = express.Router();

// This will show all the user's notes

router.get("/", (req, res) => {
  // res.render("notes/index");
  db.note
    .findAll()
    .then(function(notes) {
      res.render("notes/index", { notes: notes });
    })
    .catch(function(error) {
      res.status(400).render("main/404");
    });
});

// This will show form for a new note

router.get("/new", (req, res) => {
  res.render("notes/new");
});

router.post('/new', function(req, res) {
  db.note.create({
    content: req.body.content,
    userId: req.body.userId
  })
  .then(function(note) {
    res.redirect('/notes')
  })
  .catch(function(error) {
    res.status(400).render('main/404')
  })
})


router.get("/:id/edit", (req, res) => {
  res.render("notes/edit.ejs");
});

module.exports = router;
