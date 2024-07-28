const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require('passport')
const {RedirectUrl} = require('../middlewares/middleware.js')
const userController = require('../controllers/user.js')

router //signup
.route('/signup')
.get(userController.renderSignupForm)
.post(wrapAsync (userController.signup))

router  //login
.route('/login')
.get(userController.renderLoginForm)
.post(RedirectUrl,passport.authenticate('local',{failureFlash:true,failureRedirect:'login'}),wrapAsync(userController.login))

router.get('/logout',userController.logout)

module.exports = router;


