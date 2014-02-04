$(document).ready(function () {

    var cityLat = 37.78;
    var cityLon = -122.42;

    $("#citySubmit").click(function() {
        var city = $("#city").val();
        var openweatherapi = "http://api.openweathermap.org/data/2.5/weather?q=";
        var cityUrl = "" + openweatherapi + city; 

        $.ajax({
            url: cityUrl,
            success: function (theWeather) {

                
                city = theWeather.name; 
              

                // Get the current temp
                var far = Math.round(1.8 * (theWeather.main.temp - 273.15) + 32);
               
                $("#cityTemp").text("  " + far + " Better bundle up!");
    
                // Get the Lat Long of the city
                cityLat = theWeather.coord.lat;
                cityLon = theWeather.coord.lon; 
                $("#cityCoord").text("  " + cityLat + ", " + cityLon); 
                initialize();
            }
        });
    }); 

    
    $("#city").keydown(function(e) {
        if (e.keyCode == 13) {
            var city = $("#city").val();
            var openweatherapi = "http://api.openweathermap.org/data/2.5/weather?q=";
            var cityUrl = "" + openweatherapi + city; 

            $.ajax({
                url: cityUrl,
                success: function (theWeather) {

                city = theWeather.name; 

                // Get the current temp
                var far = Math.round(1.8 * (theWeather.main.temp - 273.15) + 32);

                $("#cityTemp").text(far);
               
                // Get the Lat Long of the city
                cityLat = theWeather.coord.lat;
                cityLon = theWeather.coord.lon; 
                $("#cityCoord").text("  " + cityLat + ", " + cityLon); 
                initialize();
                }
            });
        }
    }); 

    function initialize() {

        var mapOptions = {
            center: new google.maps.LatLng(cityLat, cityLon),  //center: new google.maps.LatLng(37.78, -122.42)
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(
            document.getElementById("map-canvas"),
            mapOptions);

    }

    google.maps.event.addDomListener(window, 'load', initialize);

});
