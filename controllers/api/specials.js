var Spot = require('../../models/spot');

module.exports = {
    getAllSpecials, 
    getASpecial
}

function getAllSpecials(req, res) {
    Spot.find({}, function(err, spots) {
        if (err) return res.status(404).json(err);
        var specials = [];
        spots.forEach(function(spot) {
            spot.specials.forEach(function(special) {
                specials.push({ 
                    id: special.id,
                    businessName: spot.name,
                    address: spot.address,
                    specials: special.content,
                    hot: special.hot,
                    votes: {upvotes: special.votes.upvotes, downvotes: special.votes.downvotes},
                    category: special.category,
                    priceRange: special.price,
                    when: { hours: special.when.hours, days: special.when.days }
                });
            });
        });
        res.status(200).json(specials); 
    });
}


function getASpecial(req, res) {
    Spot.findOne({'specials._id': req.params.id}, function(err, spot){
        if (err) return res.status(404).json(err);
        var special = spot.specials.find(special => special.id === req.params.id);
        res.status(200).json({
            id: special.id,
            businessName: spot.name,
            address: spot.address,
            specials: special.content,
            hot: special.hot,
            votes: {upvotes: special.votes.upvotes, downvotes: special.votes.downvotes},
            category: special.category,
            priceRange: special.price,
            when: { hours: special.when.hours, days: special.when.days }
        }); 
    });
}

