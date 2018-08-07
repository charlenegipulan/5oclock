var Spot = require('../models/spot');

module.exports = {
    create: createSpecial,
    destroy: destroySpecial
}

function createSpecial(req, res, next) {
    Spot.findById(req.params.id).then(function(spot) {
        spot.specials.push(req.body);
        console.log(req.body);
        spot.save(function(err) {
            if (err) return res.redirect(`/spots/${spot.yelpId}`);
            res.redirect(`/spots/${spot.yelpId}`);
        });
    });
}

function destroySpecial(req, res, next) {

}

