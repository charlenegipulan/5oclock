var express = require('express');

var router = express.Router();

var spotsController = require('../controllers/spots');

router.get('/', spotsController.index);

router.get('/:id', spotsController.show);


module.exports = router;


