const express = require('express');
const router = express.Router();
const User = require('../models/customersShema');
var moment = require('moment'); // require



// Get Request

//Nb : cest que on est dans views folder
router.get('/', (req, res) => {

    User.find().then(result => {
      res.render('index', { users: result, moment: moment })
    }).catch(err => {
      console.log(err)
    })
  
  
  
  })
  

  
  router.get('/view/:id', (req, res) => {
    User.findById(req.params.id)
      .then(result => {
        res.render('user/view', { user: result, moment: moment })
      })
      .catch(err => {
        console.log(err)
      })
  })
  
  
  
  // Post Request
  router.post('/', (req, res) => {
    const article = new Mydata({
      username: req.body.username
    })
  
    article.save()
      .then(result => {
        res.send("Data saved successfully")
      })
      .catch(err => {
        console.log(err)
      })
  })
  

  
  // search
  router.post('/search', (req, res) => {
  
    const search = req.body.searchText.trim()      // trim() : pour enlever les espaces
    User.find({ $or: [{ firstname : search }, { lastname : search }] })
    .then(result => {
      res.render('index', { users: result, moment: moment })
    }).catch(err => {
      console.log(err)
    })
  }
  )
  
  


module.exports = router;