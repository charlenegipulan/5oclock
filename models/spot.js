var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var spotSchema = new Schema ({
    name: String,
    address: {street: String, state: String, zipcode: String, city: String, country: String},
    hours: String,
    coordinates: {latitude: Number, longitude: Number},
    phone: String,
    website: String,
    image: String
});

module.exports = mongoose.model('Spot', spotSchema);
