'use strict';

var express = require('express');
var router = express.Router();
var user = require('../models/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.find({},function(err,data) {
    if (err) {
      res.json({error: err});
    }
    res.json(data);
  });
});

module.exports = router;
