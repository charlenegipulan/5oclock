var socket = io();

socket.on('vote-changed', function(specialDoc) {
    var upvoteDiv = document.querySelector(`#special-${specialDoc._id} div.upvote`);
    if (upvoteDiv) {
        var downvoteDiv = document.querySelector(`#special-${specialDoc._id} div.downvote`);
        upvoteDiv.innerHTML = specialDoc.votes.upvotes;
        downvoteDiv.innerHTML = specialDoc.votes.downvotes;
        document.getElementById("upBtn").disabled = true;
        document.getElementById("downBtn").disabled = true;
    }
});

function upvote(specialId) {
    socket.emit('upvote', specialId);
};

function downvote(specialId) {
    socket.emit('downvote', specialId);
};


