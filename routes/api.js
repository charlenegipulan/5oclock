var express = require('express');

var router = express.Router();

var apiController = require('../controllers/api/spots');


router.get('/', apiController.getAllSpots);



module.exports = router;



