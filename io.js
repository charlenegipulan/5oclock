var io = require('socket.io')();
var Spot = require('./models/spot');

io.on('connection', function(socket) {
    socket.on('upvote', function(specialId) {
        Spot.findOne({'specials._id': specialId}, function(err, spot) {
            var special = spot.specials.id(specialId);
            special.votes.upvotes++;
            io.emit('vote-changed', special);
            spot.save();
        });
    });
    
    socket.on('downvote',function(specialId) {
        Spot.findOne({'specials._id': specialId}, function(err, spot) {
            var special = spot.specials.id(specialId);
            special.votes.downvotes++;
            io.emit('vote-changed', special);
            spot.save();
        });
    });
});



module.exports = io;