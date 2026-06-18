const mapGrid = document.getElementById("mapGrid");
var map = L.map('mapGrid', {
    center: [50, 0],
    zoom: 4
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let lat = 0;
let lon = 0;
fetch('https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=30') // this is set to "limit=30" because it's tracking a lot of unclosed events, which would lag the whole page
.then(response => response.json())
.then(data => data.events.forEach(data => {
    lon = data.geometry[0].coordinates[0] // this is the longitude
    lat = data.geometry[0].coordinates[1] // this is the latitude
    L.marker([lat,lon]).addTo(map);

}));