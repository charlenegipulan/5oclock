var request = require('request');
var yelpSearchEndpoint = 'https://api.yelp.com/v3/businesses/search?categories=bars.restaurants&';
var yelpBusinessEndpoint = 'https://api.yelp.com/v3/businesses/';


module.exports = {
    search,
    getBusinessByYelpId
};

function search(lat, lng, location, term) {
    return new Promise((resolve) => {
        var word = `term=${term}`; 
        var loc = location ? `location=${location}` : `latitude=${lat}&longitude=${lng}`;
        var url = `${yelpSearchEndpoint}${loc}&${word}`;
        request({
            url,
            headers: {
                Authorization: `Bearer ${process.env.YELP_KEY}`
            }
        }, function(err, response, body) {
            resolve(JSON.parse(body));
        });
    });
}

function getBusinessByYelpId(yelpId) {
    return new Promise((resolve) => {
        var url = `${yelpBusinessEndpoint}${yelpId}`;
        request({
            url,
            headers: {
                Authorization: `Bearer ${process.env.YELP_KEY}`
            }
        }, function(err, response, body) {
            resolve(JSON.parse(body));
        });
    });
}

