const mongoose = require('mongoose');

const shema =  mongoose.Schema

const userShema = new shema({
    firstname : String,
    lastname : String,
    email : String,
    phone : String,
    age : Number,
    country : String,
    gender : String
},{timestamps : true});

// Create a model pour la collection Mydata
const User = mongoose.model('customers', userShema); 

module.exports = User;