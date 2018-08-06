// endpoint
var yelpBusinessEndpoint = 'https://api.yelp.com/v3/businesses/';
var Spot = require('../../models/spot');
  
// cached dom elements
var map = document.getElementById('map');

 // event listeners

 // functions
 
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        // center at General Assembly DTLA
      center: {lat: 34.0480423, lng: -118.2387153},
      zoom: 14
    });
    
};

// function getAllFoodTrucks() {
//     fetch(`${api}`)
//     .then(response => response.json())
//     .then(json => render(json));
// }

function render(json) { 
   
    json.forEach(function(spot) {
        var latitude = spot.coordinates.latitude;
        var longitude = spot.coordinates.longitude;
        // var applicant = spot.applicant;
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            name: spot.name
            // applicant: applicant
        });
        var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">`${applicant}`</h1>'
      '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
        marker.addListener('click', function() {
            infowindow.open(map, marker)
        });
    });
}

initMap();

// function getName(applicant) {
//     console.log(marker.applicant);
//     name.innerHTML = marker.applicant;
// }
// getAllFoodTrucks();

