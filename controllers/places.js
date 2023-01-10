const router = require('express').Router()
const express = require("express");

  // GET /places
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thaifood.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/codingcat.jpg'
  }]

router.get('/', (req, res) => {
  res.render('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
// SHOW
router.get('/:arrayIndex', (req, res) => {
    res.send(places[req.params.arrayIndex])
  })
    
router.post('/', (req, res) => {
    res.send('post /places stub')
})  
module.exports = router
