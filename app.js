const express = require('express')
const app = express()
const port =  process.env.port || 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'))
var methodeOverride = require('method-override')
app.use(methodeOverride('_method'))
const allRoutes = require('./routes/allRoutes')
const addUserRoute = require('./routes/addUser')
const editUserRoute = require('./routes/editUser')




const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});




  app.use(allRoutes)
  app.use('/user' , addUserRoute)
  app.use(editUserRoute)
