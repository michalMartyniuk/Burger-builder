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

app.get('/api/user', (req, res) => {
  console.log('Api user')
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

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })  
}

app.listen(port, () => console.log(`Node server is running on port: ${port}`));
