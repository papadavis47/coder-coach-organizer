const express = require("express");
const db = require("../models");
const router = express.Router();
const cloudinary = require('cloudinary');
const multer = require('multer');


router.get('/', (req, res) => {
    res.send("Display of images here.")
})


router.get('/new', (req, res) => {
    res.render("images/new");
})

module.exports = router;