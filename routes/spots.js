var express = require('express');
var router = express.Router();
var spotsController = require('../controllers/spots');
var specialsController = require('../controllers/specials');

router.post('/:id/specials', specialsController.create);
router.get('/search', spotsController.search);
router.get('/', spotsController.index);
router.get('/:yelpId', spotsController.show);


module.exports = router;


