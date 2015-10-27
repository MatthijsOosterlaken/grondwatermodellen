function initialize() {
	var mapCanvas = document.getElementById('map');
    var mapOptions = {
		center: new google.maps.LatLng(52.1065609, 5.3959988),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.TERRAIN
	}
	var map = new google.maps.Map(mapCanvas, mapOptions)

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(52.1065609, 5.3959988),
		map: map,
		title: "Marker 1",
	})
}
google.maps.event.addDomListener(window, 'load', initialize);
