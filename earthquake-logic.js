const axios = require('axios').default;
const {distance} = require('./haversine-distance');

const simplifyEarthquake = (earthquake) => {
    return {title: earthquake.properties.title , coordinates : {lat:earthquake.geometry.coordinates[1], lon: earthquake.geometry.coordinates[0]}};
 };

const getAllEarthquakes =  async () => {
return axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
  .then( (response) => response.data.features.map(simplifyEarthquake))
  .catch(function (error) {
    // handle error
    console.log(`There has been an issue while connecting to the API. Error code: ${error.errno}`);
  });
}

const calculateDistanceFromLocation = (lat1,lon1,earthquakesArray) => {
  return earthquakesArray.map( earthquake => ({ ...earthquake, distanceTo: distance(earthquake.coordinates.lat,lat1,earthquake.coordinates.lon,lon1)}))
}

const removeDuplicateEarthquakes = (arr) => {
  return arr.filter((v,i,a)=>a.findIndex(earthquake=>(earthquake.coordinates.lat === v.coordinates.lat && earthquake.coordinates.lon===v.coordinates.lon))===i)
}

const sortEarthquakesByDistance = (earthquakesArray)=> {
return earthquakesArray.sort((a,b)=>(a.distanceTo > b.distanceTo) ? 1 : -1);
};


module.exports = {getAllEarthquakes,calculateDistanceFromLocation, sortEarthquakesByDistance, removeDuplicateEarthquakes }
