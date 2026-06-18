const mapGrid = document.getElementById("mapGrid");
var map = L.map('mapGrid', {
    center: [50, 0],
    zoom: 4
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

fetch('https://eonet.gsfc.nasa.gov/api/v3/events?status=open')
.then(response => response.json())
.then(data => console.log(data.events));
