const mapGrid = document.getElementById("mapGrid");
var map = L.map('mapGrid', {
    center: [50, 0],
    zoom: 4
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

