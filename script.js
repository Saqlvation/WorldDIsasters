const mapGrid = document.getElementById("mapGrid");
var map = L.map('mapGrid', {
    center: [50, 0],
    zoom: 4,
    minZoom: 2 // this is to make sure u cant fully zoom out and "break" the map
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

let lat = 0;
let lon = 0;
// declaring the icons for every marker
let volcanoIcon = L.icon({
    iconUrl: 'assets/volcano.png',
    iconSize: [32, 32],
});
let wildfireIcon = L.icon({
    iconUrl: 'assets/wildfire.png',
    iconSize: [32, 32],
});
let iceIcon = L.icon({
    iconUrl: 'assets/ice.png',
    iconSize: [32, 32],
});
let defaultIcon = L.icon({
    iconUrl: 'assets/default.png',
    iconSize: [32, 32],
});
const numberDisasters = document.getElementById("numberDisasters");
const sidebar = document.getElementById("sidebar");
fetch('https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=100') // this is set to "limit=30" because it's tracking a lot of unclosed events, which would lag the whole page
.then(response => response.json())
.then(data => {
    numberDisasters.textContent = data.events.length;
    data.events.forEach(event => {
    lon = event.geometry[0].coordinates[0] // this is the longitude
    lat = event.geometry[0].coordinates[1] // this is the latitude
    // adds a simple marker ( like the google maps one..) (with marker addto) while bindpopup is what happens when you click on it it will show you all the descriptions
let icon;
if (event.categories[0].title === "Wildfires") {
    icon = wildfireIcon;
} else if (event.categories[0].title === "Volcanoes") {
    icon = volcanoIcon;
} else if (event.categories[0].title === "Sea and Lake Ice") {
    icon = iceIcon;
} else {
    icon = defaultIcon;
}
    L.marker([lat, lon],{ icon: icon }).bindPopup(`
    <b>${event.title}</b>
    <p>Category: ${event.categories[0].title}</p>
    <a href="${event.link}">More info</a>
`).addTo(map); 
    let item = document.createElement('div');
    item.textContent = event.title;
    sidebar.appendChild(item);

    });
    
});


