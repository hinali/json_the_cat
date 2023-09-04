const request = require('request');
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  const apiEndpoint = `${apiUrl}${breedName}`;

  request(apiEndpoint, (error, response, body) => {
    if (error) {
      callback(null, error);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, `Breed "${breedName}" not found.`);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};
module.exports = { fetchBreedDescription };