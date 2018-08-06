var mongoose = require('mongoose');
 
var Schema = mongoose.Schema;

var specialSchema = new Schema ({
    content: String,
    hot: {type: Boolean, default: false}, 
    votes: {upvotes: Number, downvotes: Number},
    category: {type: String, enum: ['Food', 'Drink', 'Food & Drink', 'Other']},
    spot: {type: Schema.Types.ObjectId, ref: 'Spot'},
    verified: {type: Boolean, default: false},
    when: { hours: String, days: String}
}, {
    timestamps: true
});

module.exports = mongoose.model('Special', specialSchema);