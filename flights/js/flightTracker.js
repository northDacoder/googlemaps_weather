$(document).ready(function() {
    console.log("Document is ready...");

// ------ FLIGHTSTATS APPID & APPKEY ----- //

    var appId = "2c78fb58";
    console.log(appId);
    var appKey = "a932a5c84c631510fda3231e061dae3a";
    console.log(appKey); 

// ------ FLIGHTSTATS APPID & APPKEY ----- //

    
// ------ GEOLOCATION ------ //

    var longitude;
    var latitude; 
    var radius;

    function success(position) {
        console.log("geolocation success function called");
        longitude = Number(position.coords.longitude);
        latitude = Number(position.coords.latitude);
        console.log("Longitude: " + longitude);
        console.log("Latitude: " + latitude); 
        initialize(); 
    }

    function error(msg) {
        console.log(msg); 
    } 

    if (navigator.geolocation) {
        console.log("Geolocation found, getting coordinates now..."); 
        navigator.geolocation.getCurrentPosition(success, error); 
    } else {
        console.log("Geolocation not found, please try again!");
        error("not supported"); 
    }


// ----- GEOLOCATION ------ // 

    

// ----- CREATE URI ------- //

    var baseURI;

    function createURI() {
        
        console.log("createURI() function called");
        radius = $("#show-airports").val();
        baseURI = "https://api.flightstats.com/flex/rest/v1/json/withinRadius/" + longitude + "/" + latitude + "/" + radius + "?appId=" + appId + "&appKey=" + appKey;
        console.log(baseURI);

        // 37 + "/" + -122 + "/" + 25 + "?appId=" + 2c78fb58 + "&appKey=" + a932a5c84c631510fda3231e061dae3a
     
    }

// ----- CREATE URI ------- //



    function makeSelections() {

        console.log("makeSelections function called...");
        // Select the aiport 
        var airport = $("select-airport").val(); 
        console.log("Airport: " + airport);

        // Select the Arrival airport
        var arrival = $("#select-arrival").val();

        // Select the Departure airport 
        var departure = $("select-departure").val(); 
        console.log("Departure: " + departure); 

    }
    

    $("select").change(function() {
        
        radius = $("#show-airports").val();
        console.log("Radius: " + radius); 
        var airportList = $("#select-airport").html();
        console.log(airportList); 
        console.log("Airport radius event handler fired");
        
        /*
        $.ajax({
            url: baseURI,
            success: function (flightData) {
                var HTML = $("#select-airport");

                var airportsArray = flightData; 
                for (var i = 0; i < airportsArray; i++) {
                    console.log(airportsArray[i]);
                }
            }
        }); */
    }); 


    function initialize() {
        console.log("initialize function called...");
        var latlng = new google.maps.LatLng(latitude, longitude);  //center: new google.maps.LatLng(37.78, -122.42)

        var mapOptions = {
            zoom: 14,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(
            document.getElementById("map-canvas"),
            mapOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Hi Jessie!! I Found you!!'
        });
    }


});






