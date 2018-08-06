var express = require('express');
var router = express.Router();
var spotsController = require('../controllers/spots');

router.get('/search', spotsController.search);
router.get('/', spotsController.index);
router.get('/:yelpId', spotsController.show);


module.exports = router;


