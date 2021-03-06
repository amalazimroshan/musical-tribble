let map;
function initMap() {
  let mapOptions = {
    zoom: 9,
    mapId: "eb07bfa233a67aa3",
  };
  bounds = new google.maps.LatLngBounds();
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((p) => {
      var pos = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
      userMarker.setPosition(pos);
      map.setCenter(pos);
    });
  }
  
  var UserIcon = {
    path: "M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z",
    fillColor: "#f48c06",
    fillOpacity: 1,
    anchor: new google.maps.Point(15, 20),
    strokeWeight: 0,
    scale: 2,
  };
  var ShareIcon = {
    path: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",
    fillColor: "hsl(0, 80%, 52%)",
    fillOpacity: 1,
    anchor: new google.maps.Point(15, 20),
    strokeWeight: 0,
    scale: 2,
  };
  userMarker = new google.maps.Marker({
    position: { lat: 0, lng: 0 },
    map,
    title: "YOU!",
    icon: UserIcon,
  });
  sharerMarker = new google.maps.Marker({
    position: { lat: 90, lng: 180 },
    map,
    icon: ShareIcon,
    title: "location of the person you are tracking",
  });

  map.fit;
}
