var express = require('express');
var router = express.Router();
var spotsController = require('../controllers/spots');
var specialsController = require('../controllers/specials');

router.post('/:id/specials', isLoggedIn, specialsController.create);
router.get('/search', spotsController.search);
router.get('/:yelpId', spotsController.show);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  req.session.returnTo = req.path;
  res.redirect('/auth/google');
} 
  
module.exports = router;


