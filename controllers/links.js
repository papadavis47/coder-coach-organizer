const express = require("express");
const db = require("../models");
const router = express.Router();

// GET - This will get and render a list of links

router.get("/", (req, res) => {
  db.link
    .findAll()
    .then(function(links) {
      res.render("links/index", { links: links });
    })
    .catch(function(error) {
      res.status(400).render("main/404");
    });
});

// GET - This will render a form to create a new link

router.get("/new", (req, res) => {
  db.topic.findAll().then(function(topics) {
    res.render("links/new", { topics });
  });
});

// POST - This will post a link to db from link creation form

router.post("/new", function(req, res) {
  db.link
    .create({
      href: req.body.href,
      userId: req.body.userId,
      topicId: req.body.topic
    })
    .then(function(link) {
      res.redirect("/links");
    })
    .catch(function(error) {
      res.status(400).render("main/404");
    });
});


// This is to delete a particular link

router.delete("/:id", (req, res) => {
  db.link.destroy({
    where: { id: req.params.id }
  })
  .then(function(note) {
      res.redirect("/links")
  })

});

module.exports = router;
