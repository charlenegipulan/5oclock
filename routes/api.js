var express = require('express');

var router = express.Router();

var apiController = require('../controllers/api/spots');


router.get('/', apiController.getAllSpots);
router.get('/:id', apiController.getASpot);



module.exports = router;



