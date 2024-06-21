const express = require('express');
const router = express.Router();
const User = require('../models/customersShema');
var moment = require('moment'); // require
const addUserController = require('../controllers/addUserController')


router.get('/AddCustomers.html', (req, res) => {
    console.log('get request')

    res.render('user/AddCustomers')

})

router.post('/AddCustomers.html', addUserController.addCustomer)




module.exports = router;