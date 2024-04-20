const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../model/user");

passport.serializeUser((user,next) => {
  next(null, user.id)
})

passport.deserializeUser(async (id,next) => {
  const user = await User.findById(id);
  next(null, user)

})

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/google/redirect",
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    async (accessToken, refreshToken, profile, next) => {
      
        try{
          const user =  new User({
          name: profile.displayName,
          googleId: profile.id,
        })
        await user.save();
        console.log("new user is created")
        next(null,user);
      }catch(err){
        console.log(err);
      }

          }
  )
);

module.exports = passport;
