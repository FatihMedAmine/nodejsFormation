const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
const User = require('./models/customersShema');
app.set('view engine', 'ejs');
app.use(express.static('public'))
var moment = require('moment'); // require
var methodeOverride = require('method-override')
app.use(methodeOverride('_method'))


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









// Get Request

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


app.get('/edit/:id', (req, res) => {
  User.findById(req.params.id)
    .then(result => {
      res.render('user/edit', { user: result })
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/view/:id', (req, res) => {
  User.findById(req.params.id)
    .then(result => {
      res.render('user/view', { user: result , moment: moment})
    })
    .catch(err => {
      console.log(err)
    })
})



// Post Request
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


// Put Request
app.put('/edit/:id', (req, res) => {
  User.findByIdAndUpdate
    (req.params.id, req.body).then(result => {
      res.redirect('/')
    }).catch(err => {
      console.log(err)
    })
})



// Delete Request
app.delete('/edit/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id).then(result => {
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

