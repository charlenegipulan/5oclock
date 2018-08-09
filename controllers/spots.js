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
    var {lat, lng, location, term} = req.query;
    yelpApi.search(lat, lng, location, term).then(result => {
        var spots = result.businesses;
        Spot.find({yelpId: {$in: spots.map(s => s.id)}}, function(err, modelSpots) {
            modelSpots = modelSpots.filter(s => s.specials.length);
            console.log(modelSpots);
            res.render('search', {modelSpots, spots, user: req.user});
        });
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
                var phone = business.phone.substr(business.phone.length -10);
                phone = `(${phone.substr(0, 3)}) ${phone.substr(3, 3)}-${phone.substr(6)}`;
                var spot = new Spot({
                    yelpId: business.id,
                    name: business.name,
                    address: business.location,
                    isOpen: business.hours[0].is_open_now,
                    coordinates: business.coordinates,
                    image: business.image_url,
                    website: business.url,
                    phone: phone
                });
                spot.save()
                .then(function() {
                    resolve(spot);
                });
            }); 
        });
    });
}