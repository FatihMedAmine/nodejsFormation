const express = require('express');
const router = express.Router();
const User = require('../models/customersShema');
var moment = require('moment'); // require


router.get('/edit/:id', (req, res) => {
    User.findById(req.params.id)
      .then(result => {
        res.render('user/edit', { user: result })
      })
      .catch(err => {
        console.log(err)
      })
  })
  // Put Request
  router.put('/edit/:id', (req, res) => {
    User.findByIdAndUpdate
      (req.params.id, req.body).then(result => {
        res.redirect('/')
      }).catch(err => {
        console.log(err)
      })
  })
  
  
  
  // Delete Request
  router.delete('/edit/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id).then(result => {
      res.redirect('/')
    }
    ).catch(err => {
      console.log(err)
    })
  })
  



module.exports = router;