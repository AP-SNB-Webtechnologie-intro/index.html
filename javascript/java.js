var map = L.map('map')
.setView([35.65980824918593, 139.7008380976932], 13);

var marker = L.marker([35.65980824918593, 139.7008380976932]).addTo(map);

var popup = L.popup()
.setLatLng([35.65980824918593, 139.7008380976932])
.setContent("Mugiwara store (official one piece store japan).")
.openOn(map);
marker.bindPopup("Mugiwara store (unofficial one piece store japan)").openPopup();


function onMapClick(e) {
alert("u bent nu op coördinaten" + e.latlng);
}

map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
popup
.setLatLng(e.latlng)
.setContent("u bent nu op coördinaten " + e.latlng.toString())
.openOn(map);
}

map.on('click', onMapClick);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
