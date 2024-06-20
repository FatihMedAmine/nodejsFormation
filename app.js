const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
const User = require('./models/customersShema');
app.set('view engine', 'ejs');
app.use(express.static('public'))
var moment = require('moment'); // require


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










//Nb : cest que on est dans views folder
app.get('/', (req, res) => {

  User.find().then(result => {
    res.render('index', { users: result , moment : moment})
  }).catch(err => {
    console.log(err)
  })



})

app.get('/user/AddCustomers.html', (req, res) => {

  res.render('user/AddCustomers')

})


app.get('/user/edit.html', (req, res) => {

  res.render('user/edit')

})

app.get('/user/:id', (req, res) => {
  User.findById(req.params.id)
    .then(result => {
      res.render('user/view', { user: result , moment: moment})
    })
    .catch(err => {
      console.log(err)
    })
})



app.post('/', (req, res) => {
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

app.post('/user/AddCustomers.html', (req, res) => {
  const user = new User(req.body)
  user.save().then(() => {
    res.redirect('/')
  }
  ).catch(err => {
    console.log(err)
  })

})

mongoose.connect('mongodb+srv://Med-Amine:YjpP1EZWdi4icrrN@cluster0.p4zcjmd.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {

    app.listen(port, () => {
      console.log(`http://localhost:${port}/`)
    })

  })

  .catch(err => {
    console.log('error', err);
  });

