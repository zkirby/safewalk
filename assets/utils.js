const spotcrime = require('spotcrime')
const TO_MILES = 69;

function getWalkScore(route) {
    let bounds = route["bounds"]
    let crimes = getCrimes(bounds);
    for (let step of routes["legs"]["steps"]) {

    }
}

function getCrimes(bounds) {
    let latCenter = (bounds["northeast"]["lat"] + bounds["southwest"]["lat"]) / 2;
    let lonCenter = (bounds["northeast"]["lon"] + bounds["southwest"]["lon"]) / 2;
    let verticalDistance = Math.abs((bounds["northeast"]["lat"] - bounds["southwest"]["lat"]) * TO_MILES);
    let horizontalDistance = Math.abs((bounds["northeast"]["lon"] - bounds["southwest"]["lon"]) * TO_MILES);
    return spotcrime.getCrimes({ lat: latCenter, lon: lonCenter }, Math.max(verticalDistance, horizontalDistance));
}


function stepScore(step, crimes){
    let start = step["start_location"];
    let end = step["end_location"];
    
}