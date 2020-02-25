var express = require("express");
var db = require("../models");
var router = express.Router();


router.get('/', (req, res) => {
    res.send("Display of images here.")
})

module.exports = router;