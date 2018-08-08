var Spot = require('../models/spot');

module.exports = {
    create: createSpecial,
    destroy
}

function createSpecial(req, res, next) {
    Spot.findById(req.params.id).then(function(spot) {
        spot.specials.push(req.body);
        spot.save(function(err) {
            if (err) return res.redirect(`/spots/${spot.yelpId}`);
            res.redirect(`/spots/${spot.yelpId}`);
        });
    });
}

function destroy(req, res, next) {
    Spot.findOne({'specials._id': req.params.id}).then(function(spot) {
        spot.specials.remove(req.params.id);
        spot.save(() => {
            res.json({message: 'Removed special!'});
        });
    });
}

