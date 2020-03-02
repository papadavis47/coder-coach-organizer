const express = require("express");
const db = require("../models");
const router = express.Router();
const cloudinary = require('cloudinary');
const multer = require('multer');
const upload = multer({ dest: 'app/uploads'});


router.get('/', (req, res) => {
    res.send("Display of images here.")
})


router.get('/new', (req, res) => {
    res.render("images/new");
})

router.post('/new', upload.single('inputFile'), function(req, res) {
    cloudinary.uploader.upload(req.file.path, function(result) {
      var cloudID =  result.public_id;
      var imageLink = `http://res.cloudinary.com/codercoachorganizer/image/upload/v1582927083/${cloudID}`
      res.render('images/result', {image: imageLink});
    })
  })

module.exports = router;