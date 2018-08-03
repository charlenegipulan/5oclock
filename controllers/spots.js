var Spot = require('../models/spot');
var yelpApi = require('../utilities/yelp-api');

module.exports = {
    index, 
    show: showSpot,
    search
}

function index(req, res, next) {
    
}

function showSpot(req, res, next) {

}

function search(req, res, next) {
    var {lat, lng, location} = req.query;
    yelpApi.search(lat, lng, location).then(spots => {
        console.log(spots);
        res.render('index', {spots, user: req.user});
    });
}

