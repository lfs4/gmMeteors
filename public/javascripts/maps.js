      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        var myLatLang = new google.maps.LatLng(-25.363882,131.044922);
        var marker = new google.maps.Marker({
        	position: myLatLang,
        	map: map,
        	animation: google.maps.Animation.DROP,
        	title: "Hello World"
        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);