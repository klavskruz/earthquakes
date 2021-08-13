
const { calculateDistanceFromLocation,getAllEarthquakes,sortEarthquakesByDistance,removeDuplicateEarthquakes} = require("./earthquake-logic");
const {validateLatLon} = require('./input-validator');
const reader = require("readline-sync");

// Main function taking two inputs from stdin
const main = async () => {
    console.log('--------------------------------------------');
    const lat = parseFloat(reader.question('Enter lattitude: '));
    const lon = parseFloat(reader.question('Enter longitude: '));
    // Validate user input
    if(!validateLatLon(lat,lon)) return false;

    console.log('--------------------------------------------');
    console.log('Fetching earthquake data...');

    let earthquakes = await getAllEarthquakes();
    // Check for successful connection
    if(earthquakes === undefined) return false;
    
    // Perform logic to get the nearest earthquakes
    earthquakes = removeDuplicateEarthquakes(earthquakes);
    earthquakes = calculateDistanceFromLocation(lat,lon,earthquakes);
    earthquakes = sortEarthquakesByDistance(earthquakes);

    console.log('--------------------------------------------');

    for(let i = 0 ; i < 10 ; i++){
        console.log(`${earthquakes[i].title} || ${Math.round(earthquakes[i].distanceTo)}`);
    }
    console.log('--------------------------------------------');
    console.log('Finished');
    return true;
}

main();