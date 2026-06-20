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
const numberDisasters = document.getElementById("numberDisasters");
fetch('https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=100') // this is set to "limit=30" because it's tracking a lot of unclosed events, which would lag the whole page
.then(response => response.json())
.then(data => {
    numberDisasters.textContent = data.events.length;
    data.events.forEach(event => {
    lon = event.geometry[0].coordinates[0] // this is the longitude
    lat = event.geometry[0].coordinates[1] // this is the latitude
    L.marker([lat, lon]).bindPopup(event.title).addTo(map); // adds a simple marker ( like the google maps one..)

    });
});

