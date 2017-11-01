const express = require('express');
const burger = require('./../models/burgers.js');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res){
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
  burger.getBurgers(function(burgerResults){
    res.render("index", {burger_data: burgerResults});
  })
});

router.post('/add', function(req, res){
  burger.addBurger(req.body.burger);
  res.redirect('/burgers');
})

router.post('/update', function(req, res){
  console.log(req.body);
  burger.devourBurger(req.body.burger, 1);
  res.redirect('/burgers');
})

module.exports = router;
