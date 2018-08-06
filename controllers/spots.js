var Spot = require('../models/spot');
var yelpApi = require('../utilities/yelp-api');

module.exports = {
    index, 
    show: showSpot, 
    search
}

function index(req, res, next) {
    
}


function search(req, res, next) {
    var {lat, lng, location} = req.query;
    yelpApi.search(lat, lng, location).then(result => {
        var spots = result.businesses;
        res.render('search', {spots, user: req.user});
    });
}

function showSpot(req, res, next) {
    var yelpId = req.params.yelpId;
    getExistingOrNewSpot(yelpId).then(function(spot) {
        res.render('spots/show', { spot, user: req.user });
    });
}

function getExistingOrNewSpot(yelpId) {
    return new Promise(function(resolve) {
        Spot.findOne({yelpId}).then(spot => {
            if (spot) return resolve(spot);
            // get the information
            yelpApi.getBusinessByYelpId(yelpId).then(business => {
            //add to database
                var spot = new Spot({
                    yelpId: business.id,
                    name: business.name,
                    address: business.location,
                    is_closed: business.is_closed,
                    coordinates: business.coordinates,
                    image: business.image_url,
                    website: business.url,
                    phone: business.phone
                });
                spot.save()
                .then(function() {
                    resolve(spot);
                });
            }); 
        });
    });
}