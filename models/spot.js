var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var spotSchema = new Schema ({
    yelpId: String,
    name: String,
    address: {
        address1: String, 
        state: String, 
        zip_code: String, 
        city: String, 
        country: String
    },
    is_closed: Boolean,
    coordinates: {latitude: Number, longitude: Number},
    phone: String,
    website: String,
    image: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Spot', spotSchema);
