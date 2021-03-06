// Add console.log to check to see if our code is working.

console.log("working");

// Create the map object with a center and zoom level.

let map = L.map('mapid').setView([40.7, -94.5], 4);

// We're assigning the variable map to the object L.map(), 
// and we'll instantiate the object with the given string 'mapid'.
// The mapid will reference the id tag in our <div> element on the index.html file.
// The setView() method sets the view of the map with a geographical center
// First coordinate is latitude (40.7) and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18

// An alternative to using the setView() method 
// let map = L.map("mapid", {
//     center: [
//         40.7, -94.5
//     ],
//     zoom: 4
// });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_key
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);