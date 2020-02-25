var express = require("express");
var db = require("../models");
var router = express.Router();


router.get('/', (req, res) => {
    res.send("List of links here.")
})

module.exports = router;