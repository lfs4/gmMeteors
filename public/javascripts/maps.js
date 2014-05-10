      
var infoWindow = null;

var markers = [];
var results = 0;
function initialize() {
  var localdata = JSON.parse($("#localdata").val());
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 1
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  infoWindow = new google.maps.InfoWindow({
    content: "stuff"
  });

  //var myLatLang = new google.maps.LatLng(-25.363882,131.044922);
  for( var i = 0; i < localdata.length; i++){
/*      setTimeout(function(){
        addMeteor(i);
      }, i * 200 );*/
      addMeteor(i);
      results++;
  }

  function addMeteor(index)
  {
        var meteor = localdata[index];
        var myLatLang = new google.maps.LatLng(meteor.latitude, meteor.longitude);
        
        var imageSize = 32;
        var scaleFactor = meteor.mass / 13240;

        //Left out but can be used to reduce the scaling baised on size
        //scaleFactor = ((scaleFactor-1)/2)+1;
        
        if (scaleFactor > 1.3)
          scaleFactor = 1.3;
        else if (scaleFactor < 0.5)
          scaleFactor = 0.5;

        var image = new google.maps.MarkerImage(
        '../images/meteor.png',
        new google.maps.Size(imageSize * scaleFactor, imageSize * scaleFactor),
        new google.maps.Point(0, 0),
        new google.maps.Point(imageSize/2 * scaleFactor, imageSize/2 * scaleFactor),
        new google.maps.Size(imageSize * scaleFactor, imageSize * scaleFactor));

        var marker = new google.maps.Marker({
          classification: meteor.classification,
          year: meteor.year,
          mass: meteor.mass,
          fell: meteor.fall,
          position: myLatLang,
          map: map,
          //animation: google.maps.Animation.DROP,
          clickable: true,
          title: meteor.name,
          icon: image,
        });
      google.maps.event.addListener(marker, 'click', function(){
        var content = '<div id="content">' + 
        '<p><b>' + this.title + '</b></p>' + 
        '<div id = "bodyContent">' + 
        '<p> Year: ' + this.year +
        '<br>Classification: ' + this.classification +
        '<br>Mass: ' + this.mass + " grams" + 
        '<br>Fell or Found: ' + this.fell +
        '<br>Position: ' + this.position +
        '</p>' + 
        '</div>' + 
        '</div>'; 
        //this.year + " " + this.mass + " " + this.position + " " + this.fell;
        infoWindow.setContent(content);
        infoWindow.open(map, this);
      });
      markers.push(marker);
      
  }
  $('#meteorCount').text("Results " + results);
  $('#localdata').remove();
  var mcOptions = {maxZoom: 18, minimumClusterSize: 30};
  var markerCluster = new MarkerClusterer(map, markers, mcOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
