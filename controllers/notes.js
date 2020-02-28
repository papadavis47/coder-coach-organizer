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

// This creates a new note

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

// This is where I get the form with content to update a note

router.get('/:id/edit', function(req, res) {
  db.note.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(note) {
    res.render("notes/edit", { note: note });

  })

})



// This is the PUT route to send updated not to db
router.put("/:id/edit", (req, res) => {
  db.note.findOne({
    where: { id: req.params.id }
  })
  .then(function(note) {
    note.content = req.body.content
    note.save().then(function() {
      res.redirect("/notes")
    })
  })

});

module.exports = router;
