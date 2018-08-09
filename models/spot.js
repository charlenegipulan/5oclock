var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var specialSchema = new Schema ({
    content: {type: String, required: true},
    votes: {
        upvotes: {type: Number, default: 0},
        downvotes: {type: Number, default: 0}
    },
    category: {type: String, enum: ['Food', 'Drink', 'Food & Drink', 'Other']},
    verified: {type: Boolean, default: false},
    price: {type: String, enum: ['$', '$$', '$$$', '$$$$']},
    when: { hours: String, days: String}, 
    user: String
}, {
    timestamps: true
});

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
    isOpen: Boolean,
    coordinates: {latitude: Number, longitude: Number},
    phone: String,
    website: String,
    image: String,
    specials: [specialSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Spot', spotSchema);
