var map = L.map('map')
.setView([34.70173848853386, 135.4964835148338], 13);

var marker = L.marker([34.70173848853386, 135.4964835148338]).addTo(map);

var popup = L.popup()
.setLatLng([34.70173848853386, 135.4964835148338])
.setContent("Mugiwara store (official one piece store japan).")
.openOn(map);
marker.bindPopup("Mugiwara store (umeda").openPopup();




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