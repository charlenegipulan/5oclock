var express = require('express');

var router = express.Router();

var specialsController = require('../controllers/specials');

router.get('/new', specialsController.new);
router.post('/', specialsController.create);
router.delete('/:id', specialsController.destroy);
module.exports = router;
