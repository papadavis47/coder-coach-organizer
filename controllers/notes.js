var express = require("express");
var db = require("../models");
var router = express.Router();


router.get('/', (req, res) => {
    res.send("Testing out a super cool route here.")
})

module.exports = router;