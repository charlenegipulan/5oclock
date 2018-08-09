var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user: req.user, spots: [] });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/special-login/:yelpId', function(req, res) {
  req.session.returnTo = `/spots/${req.params.yelpId}?showForm=true`;
  res.redirect('/auth/google');
});

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successReturnToOrRedirect: '/',
    failureRedirect: '/'
  }
));



router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
