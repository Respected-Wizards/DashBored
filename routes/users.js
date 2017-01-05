var express = require('express');
var router = express.Router();
var eventful = require("../api/eventful");
var news = require('../api/news');
var maps = require("../api/googlemaps")
var userModel = require('../model/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
    userModel.loadDash(req.body.username).then(function(result) {
        res.send(result)
    })
});

router.get('/guest', function(req, res, next) {
    res.render('default');
});

router.get('/:id', function(req, res, next) {});

router.put('/:id', function(req, res, next) {});

router.post('/', function(req, res, next){
  console.log(req.body);
  res.send('received something');
});

router.post('/', function(req, res, next) {});





module.exports = router;
