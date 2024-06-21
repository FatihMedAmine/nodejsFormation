const User = require('../models/customersShema');
var moment = require('moment'); // require




const addCustomer =  (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.redirect('/')
    }
    ).catch(err => {
        console.log(err)
    })

}


module.exports = addCustomer;