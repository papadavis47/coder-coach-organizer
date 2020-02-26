var express = require("express");
var db = require("../models");
var router = express.Router();


// This will show all the user's notes

router.get('/', (req, res) => {
    res.render("notes/index.ejs")
})

router.get('/new', (req, res) => {
    res.render("notes/new.ejs")
}) 

router.get('/:id/edit', (req, res) => {
    res.render("notes/edit.ejs")
})

module.exports = router;