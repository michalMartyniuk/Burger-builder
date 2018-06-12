const express = require('express');
const app = express();
const port = process.env.PORT || 7000;
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./keys');
const mongoose = require('mongoose');
const path = require('path');

app.get('/api/user', (req, res) => {
  res.send("Hello")
  // res.send(req.user)
})

app.use(express.static(path.join(__dirname, 'client/build')))

app.listen(port, () => console.log(`Node server is running on port: ${port}`));
