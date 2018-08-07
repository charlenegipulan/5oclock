var express = require('express');

var router = express.Router();

var apiController = require('../controllers/api/spots');
var specialsController = require('../controllers/specials');

router.get('/', apiController.getAllSpots);
router.get('/:id', apiController.getASpot);

// Internal API CALLS
router.delete('/specials/:id', specialsController.destroy);

module.exports = router;



