var express = require("express");
var db = require("../models");
var router = express.Router();

// This will display all current topics for a user

router.get("/", (req, res) => {
  // res.render("topics/index.ejs");
  db.topic.findAll()
  .then(function(topics) {
    res.render('topics/index', { topics: topics })
  })
  .catch(function(error) {
    res.status(400).render('main/404')
  })

});

// This will contain the form for  new topic to be created

router.get("/new", (req, res) => {
  res.render("topics/new");
});

// This will post information from a topic form

router.post('/new', function(req, res) {
  db.topic.create({
    name: req.body.name,
    userId: req.body.userId
  })
  .then(function(topic) {
    res.redirect('/topics')
  })
  .catch(function(error) {
    res.status(400).render('main/404')
  })
})

// This will display a particular topic 

router.get("/:id", (req, res) => {
  res.render("topics/show");
})



module.exports = router;
