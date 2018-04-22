const request = new XMLHttpRequest();

const crime_multipliers = {
    "Arrest": .2,
    "Other": .1,
    "Arson": .3,
    "Assault": .9,
    "Vandalism": .2,
    "Shooting": 1,
    "Burglary": .6,
    "Theft": .8,
    "Robbery": .7
}


 function getRoutesAndScores(start, end) {
    let mapsURL = resolveMapsURL(start, end);
    request.open("GET", mapsURL, false);
    request.send();
    let out = [];
    let routes = JSON.parse(request.responseText)["routes"];
    for (let route of routes) {
        out.push({ score: getRouteScore(route), route: route });
    }
    return out;
}



function resolveCrimeURL(lat, lon, radius) {
    return "https://api.spotcrime.com/crimes.json?lat=" + lat + "&lon=" + lon + "&radius=" + radius
        + "&key=heythisisforpublicspotcrime.comuse-forcommercial-or-research-use-call-877.410.1607-or-email-pyrrhus-at-spotcrime.com"
}

function resolveMapsURL(start, end) {
    return "https://maps.googleapis.com/maps/api/directions/json?origin="
        + start.replace(" ", "+")
        + "&destination=" + end.replace(" ", "+")
        + "&key=AIzaSyCDNySaeC0oZMGFPmR2Xj8PJjXPU7cR7bs&mode=walking&alternatives=true";

}

function getSafetyRating(num_rating) {
    if (num_rating < 40) {
        return { message: "Low Risk", color: "#6FCF97" }
    } else if (num_rating < 70) {
        return { message: "Medium Risk", color: "#F2C94C" }
    } else {
        return { message: "High Risk", color: "#EB5757" }
    }
}


function getRouteScore(route) {
    let bounds = route["bounds"]
    let crimes = getNearbyCrimes(route);
    let finalScore = 0;
    for (let step of route["legs"][0]["steps"]) {
        finalScore += stepScore(step, crimes);
    }

    return finalScore / route["legs"][0]["steps"].length;
}


 function getNearbyCrimes(route) {
    let bounds = route["bounds"];
    let diagonal = getDistance(bounds["northeast"]["lat"],bounds["southwest"]["lat"], bounds["northeast"]["lng"],bounds["southwest"]["lng"]);
    let latCenter = (bounds["northeast"]["lat"] + bounds["southwest"]["lat"]) / 2;
    let lonCenter = (bounds["northeast"]["lng"] + bounds["southwest"]["lng"]) / 2;
    let crimeURL = resolveCrimeURL(latCenter, lonCenter, diagonal / 2);

    request.open("GET", crimeURL, false);
    request.send();
    return JSON.parse(request.responseText)["crimes"];
}



function stepScore(step, crimes) {
    let start = step["start_location"];
    let end = step["end_location"];
    let score = 0;
    let maxCrimeDistance = farthestCrimeDistance(crimes, start, end);
    for (let crime of crimes) {
        let distance = getDistance(start["lat"], start["lng"], crime["lat"], crime["lon"]) + getDistance(end["lat"], end["lng"], crime["lat"], crime["lon"]);
        let temp = (maxCrimeDistance - distance) * (100 / maxCrimeDistance) * crime_multipliers[crime["type"]]
        if (temp > score) {
            score = temp;
        }
    }

    return score;
}

function farthestCrimeDistance(crimes, start, end) {
    let farthest = 0
    for (let crime of crimes) {
        let distance = getDistance(start["lat"],start["lng"], crime["lat"], crime["lon"]) + getDistance(end["lat"],end["lng"], crime["lat"],crime["lon"]);
        if (distance > farthest) {
            farthest = distance;
        }
    }
    return farthest;
}

function getDistance(lat1, lon1, lat2, lon2) {
    var R = 3959; // Radius of the earth in miles
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;

    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}


