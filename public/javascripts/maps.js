      function initialize() {
        var localdata = JSON.parse($("#localdata").val());
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 1
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        //var myLatLang = new google.maps.LatLng(-25.363882,131.044922);
      for(var i = 0; i < 20; i++){
            var meteor = localdata[i];
          	var myLatLang = new google.maps.LatLng(meteor.latitude, meteor.longitude);
  	        var marker = new google.maps.Marker({
              classification: meteor.classification,
              year: meteor.year,
              mass: meteor.mass,
              fell: meteor.fall,
  	        	position: myLatLang,
  	        	map: map,
  	        	animation: google.maps.Animation.DROP,
  	        	title: "Hello World"
  	        });
    	 }
       $('#localdata').remove();
       google.maps.event.addListener(marker, 'click', function(){
          console.log(marker.classification);
       });
    }

google.maps.event.addDomListener(window, 'load', initialize);
