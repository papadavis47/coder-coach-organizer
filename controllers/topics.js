var express = require("express");
var db = require("../models");
var router = express.Router();

// This will display all current topics for a user

router.get("/", (req, res) => {
  res.render("topics/index.ejs");
});

// This will contain the form for  new topic to be created

router.get("/new", (req, res) => {
  res.render("topics/new.ejs");
});

// This will display a particular topic 

router.get("/:id", (req, res) => {
  res.render("topics/show.ejs");
})



module.exports = router;
