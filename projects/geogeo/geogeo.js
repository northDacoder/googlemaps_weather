if (Meteor.isClient) {
$(document).ready(function () {
    function displayLocationErrors(err) {
        var error = err;
        $("#status-message").text('Location data not available');
        console.warn('Error(' + err.code + '): ' + err.message);
    }

    function displayLocationData() {
        navigator.geolocation.getCurrentPosition(buildLocationDataTable, displayLocationErrors);
    }

    function initLocationControls() {
        var geoMessage;

        $("#display-location-data").click(function () {
            displayLocationData();
        });

        $("#display-location-map").click(function () {
            initialize();
        });

        $("#status-message").val(geoMessage);
    }

    var positionLat;
    var positionLon;

    function buildLocationDataTable(pos) {
        var position = pos;
        positionLat = position.coords.latitude;
        positionLon = position.coords.longitude;
        // alert('Latitude: ' + positionLat + ', Longitude: ' + positionLon); 
        $("#status-message").text('Location data retrieved OK');
        console.log(position);
        $('#display-location-map').removeAttr('disabled');
    }

    initLocationControls();

    function initialize() {

        var mapOptions = {
            center: new google.maps.LatLng(positionLat, positionLon),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };

        var map = new google.maps.Map(
        document.getElementById("location-map"),
        mapOptions);
    }
});
}