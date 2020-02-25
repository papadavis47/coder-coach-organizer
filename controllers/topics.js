var express = require("express");
var db = require("../models");
var router = express.Router();

// This will display all current topics for a user

router.get("/", (req, res) => {
  res.render("topics/show.ejs");
});

// This will contain the form for  new topic to be created

router.get("/new", (req, res) => {
  res.render("topics/new.ejs");
});

// This will display a particular topic and any notes that are connected to it

router.get("/:id/notes", (req, res) => {
  res.render("topics/notes.ejs");
});

router.get("/:id/links", (req, res) => {
  res.render("topics/links");
});

router.get("/:id/images", (req, res) => {
  res.render("topics/images");
});

module.exports = router;
