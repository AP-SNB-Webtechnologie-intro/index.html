var map = L.map('map')
.setView([35.729495740823175, 139.71871379612898], 13);

var marker = L.marker([35.729495740823175, 139.71871379612898]).addTo(map);

var popup = L.popup()
.setLatLng([35.729495740823175, 139.71871379612898])
.setContent("Mugiwara store (official one piece store japan).")
.openOn(map);
marker.bindPopup("Mugiwara store (ikebura)").openPopup();




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