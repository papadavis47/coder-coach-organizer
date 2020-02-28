var express = require("express");
var db = require("../models");
var router = express.Router();


router.get('/', (req, res) => {
    // res.send("List of links here.")
    db.link.findAll()
    .then(function(links) {
        res.render("links/index", { links: links })
    })
    .catch(function(error) {
        res.status(400).render("main/404");
    })
});

router.get('/new', (req, res) => {
    res.render("links/new")
})


// This will post information from a link entry form

router.post('/new', function(req, res) {
    db.link.create({
      href: req.body.href,
      userId: req.body.userId
    })
    .then(function(link) {
      res.redirect('/links')
    })
    .catch(function(error) {
      res.status(400).render('main/404')
    })
  })

module.exports = router;