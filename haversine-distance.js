// Function to calculate the distance between two coordinates 'as the crow flies' taking in account that earth is spherical by using the Haversine formula. 

const distance = (lat1,
    lat2, lon1, lon2)  =>
{


lon1 =  lon1 * Math.PI / 180;
lon2 = lon2 * Math.PI / 180;
lat1 = lat1 * Math.PI / 180;
lat2 = lat2 * Math.PI / 180;

// Haversine formula
let dlon = lon2 - lon1;
let dlat = lat2 - lat1;
let a = Math.pow(Math.sin(dlat / 2), 2)
+ Math.cos(lat1) * Math.cos(lat2)
* Math.pow(Math.sin(dlon / 2),2);

let c = 2 * Math.asin(Math.sqrt(a));

// Radius of earth in kilometers. Replace with 3956 if miles.
let r = 6371;

// calculate the result
return(c * r);
}

module.exports = {distance};