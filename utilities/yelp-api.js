var request = require('request');
var yelpEndpoint = 'https://api.yelp.com/v3/businesses/search?categories=bars.restaurants&';

module.exports = {
    search
};

function search(lat, lng, location) {
    return new Promise((resolve, reject) => {
        var loc = location ? `location=${location}` : `latitude=${lat}&longitude=${lng}`;
        var url = `${yelpEndpoint}${loc}`;
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