const router = require("express").Router();
const Project = require("../models/project.js");

//Retrieve all words
router.get("/project/all/", (req, res) => {
  Project.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err)
    });
});

module.exports = router;