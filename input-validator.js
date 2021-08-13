// Function to validate the data type and the constraints of user input

const validateLatLon = (lat,lon) => {
    if(Number.isNan(lat)){
        console.log('Invalid input: Lattitude must be a number between -90 and 90');
        return false;
    }
    if(Number.isNan(lon)){
        console.log('Invalid input: Longitude must be a number between -180 and 180');
        return false;
    }

    if(!(isFinite(lat) && Math.abs(lat) <= 90)){
        console.log('Invalid input: Number out of bounds for lattitude (-90 to 90)');
        return false;
    }
    if(!(isFinite(lon) && Math.abs(lon) <= 180)){
        console.log('Invalid input: Number out of bounds for longitude (-180 to 180)');
        return false;
    }

    return true;
}

module.exports = {validateLatLon};
