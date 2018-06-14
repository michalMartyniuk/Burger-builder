const express = require('express');
const app = express();
const passport = require('passport');
const port = process.env.PORT || 7000;
const cookieSession = require('cookie-session');
const keys = require('./keys');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/User');
require('./auth/passport.js');

mongoose.connect(keys.mongoURI).then(() => "Connected to database");

app.use(
  cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.cookieSecret]
  })
)
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})


app.get('/api/user', (req, res) => {
  res.send(req.user)
})

app.get('/api/logout', (req, res) => {
  req.logout();
  res.redirect('/'); 
})

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/')
})

// if(process.env.NODE_ENV === 'production') {
  // app.use(express.static(path.join(__dirname, 'client/build')));  
// }

app.listen(port, () => console.log(`Node server is running on port: ${port}`));
