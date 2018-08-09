var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/test', function(req, res) {
  res.send('<h1>Test Worked</h1>');
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.user, spots: [] });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
