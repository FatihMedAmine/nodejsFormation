const express = require('express');
const router = express.Router();
const User = require('../models/customersShema');
var moment = require('moment'); // require


router.get('/AddCustomers.html', (req, res) => {

    res.render('user/AddCustomers')

})

router.post('/AddCustomers.html', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.redirect('/')
    }
    ).catch(err => {
        console.log(err)
    })

})




module.exports = router;