var geo = navigator.geolocation;

	function Position (e) {
		// body...
		var latitude  = e.coords.latitude,
			longitude = e.coords.longitude,
			accuracy  = e.coords.accuracy;
		console.log("Position True");
		console.log(latitude);
		console.log(longitude);
		if ( accuracy <= 200) {
			console.log("Margen de error gracias al wifi que tenes cerca: " + accuracy +"m");
			var mapa = new Image();
			xxxxxxxxxxxxmapa.src = "http://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&zoom=15&size=150x150&sensor=false";
			$("#goglemaps").append(mapa);
				if (accuracy > 100) {
					console.log('bad accuracy ' + accuracy);
				}
		}
		else
		{
			console.log('bad accuracy ' + accuracy);
		}
	}
	function Position_deniged (p) {
		// body...
		console.log("Position deniged");
		console.log(p);
	}
	geo.getCurrentPosition(Position,Position_deniged, {
		enableHighAccuracy: true
	});