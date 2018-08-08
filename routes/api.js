var express = require('express');

var router = express.Router();

var apiController = require('../controllers/api/specials');
var specialsController = require('../controllers/specials');

router.get('/', apiController.getAllSpecials);
router.get('/:id', apiController.getASpecial);

// Internal API CALLS
router.delete('/specials/:id', specialsController.destroy);

module.exports = router;



