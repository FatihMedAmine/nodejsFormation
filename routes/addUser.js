const express = require('express');
const router = express.Router();
const User = require('../models/customersShema');
var moment = require('moment'); // require
const addUserController = require('../controllers/addUserController')


router.get('/AddCustomers', (req, res) => {
     
    res.render('user/addUser')

})

router.post('/AddCustomers.html', addUserController.addCustomer)




module.exports = router;