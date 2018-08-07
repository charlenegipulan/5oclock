var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var specialSchema = new Schema ({
    content: String,
    hot: {type: Boolean, default: false}, 
    votes: {upvotes: Number, downvotes: Number},
    category: {type: String, enum: ['Food', 'Drink', 'Food & Drink', 'Other']},
    verified: {type: Boolean, default: false},
    price: {type: String, enum: ['$', '$$', '$$$', '$$$$']},
    when: { hours: String, days: String}
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
    hours: {
        is_open_now: Boolean,
        open: [
            {
                day: Number,
                start: String,
                end: String
            }
        ]
    },
    coordinates: {latitude: Number, longitude: Number},
    phone: String,
    website: String,
    image: String,
    specials: [specialSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Spot', spotSchema);
