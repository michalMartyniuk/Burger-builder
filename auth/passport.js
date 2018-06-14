const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../keys');
const User = require('../models/User');

passport.serializeUser((user, done) => {
  console.log('Serialize')
  done(null, user.id)
});

passport.deserializeUser((id, done) => {
  console.log('Deserialize')
  User.findById(id, (err, user) => {
    done(null, user)
  })
})

passport.use( 
  new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile.emails[0].value)
    const user = await User.findOne({ password: profile.id })
    if(user) {
      done(null, user)
    } else {
      const user = await new User({ 
        email: profile.emails[0].value, 
        password: profile.id
      }).save()
      
      done(null, user)
    }
  })
)