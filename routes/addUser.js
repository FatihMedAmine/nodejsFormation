const express = require('express');
const router = express.Router();
const User = require('../models/customersShema');
var moment = require('moment'); // require
const addUserController = require('../controllers/addUserController')




router.post('/AddCustomers.html', addUserController.addCustomer)




module.exports = router;