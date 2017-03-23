/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<span>%data%</span>';
var HTMLheaderRole = '<span>%data%</span>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li><span class="first-block">Mobile:</span><span class="second-block">+%data%</span></li>';
var HTMLemail = '<li><span class="first-block">Email:</span><span class="second-block">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li><span class="first-block">Github:</span><span class="second-block">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li><span class="first-block">Location:</span><span class="second-block">%data%</span></li>';

var HTMLbioPic = 'background: url(%data%);';
var HTMLwelcomeMsg = '<h2>%data%</h2>';

var HTMLskillsStart = '<div class="skills-entry row row-pb-md"> </div>';
var HTMLskills = '<div class="col-md-3 col-sm-6 col-xs-12 text-center"> <div class="chart" data-percent="95"><span><strong>%data%</strong>95%</span></div></div>';

var HTMLworkStart = '<div class="timeline-panel"><div class="work-head timeline-heading"></div><div class="timeline-body"> <p></p></div>  </div> ';
var HTMLworkEmployer = ' <span class="company">%data% ';
var HTMLworkTitle = '<h3 class="timeline-title">%data%</h3> </div>';
var HTMLworkDates = '%data%';
var HTMLworkLocation = '%data%</span>';
var HTMLworkDescription = '<div class="work-body timeline-body"><p>%data%</p></div>';

var HTMLprojectStart = '<div class="projects-entry row"></div>';
var HTMLprojectTitle = '<h3>%data%</h3>';
var HTMLprojectDates = '<span>%data%</span>';
var HTMLprojectDescription = '<span>%data%</span>';
var HTMLprojectImage = '<div class="col-md-3 text-center col-padding animate-box"><a href="#" class="work" style="background-image: url(%data%);"><div class="desc"> </div> </a></div>';

var HTMLschoolStart = '<div class="timeline-panel"><div class="edu-head timeline-heading"></div><div class="timeline-body"> <p></p></div>  </div> ';
var HTMLschoolName = ' <span class="company">%data% ';
var HTMLschoolDegree = '<h3 class="timeline-title">%data%</h3> </div>';
var HTMLschoolDates = '%data%';
var HTMLschoolLocation = '%data%</span>';
var HTMLschoolMajor = '<div class="edu-body timeline-body"><p>Major: %data%</p></div>';

var HTMLonlineClasses = '<div class="timeline-panel"><div class="online-head timeline-heading"></div><div class="timeline-body"> <p></p></div>  </div> ';
var HTMLonlineTitle = '<h3 class="timeline-title">%data%';
var HTMLonlineSchool = ' - %data%</h3> </div>';
var HTMLonlineDates = '<span class="company">%data% </span>';
var HTMLonlineURL = '<div class="work-body timeline-body"><p>%data%</p></div>';

var internationalizeButton = '<a href="#" class="btn btn-default btn-lg">Internationalize</a>';
var googleMap = '<div id="map"></div>';


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('#button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html('<span>'+iName+'</span>');
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
        map.setZoom(8);
          map.setCenter(marker.getPosition());
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
