const request = require('request');
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';

// Get the breed name from the command-line arguments
const breedName = process.argv[2];

if (!breedName) {
  console.log('Please provide a breed name as a command-line argument.');
}

const apiEndpoint = `${apiUrl}${breedName}`;

request(apiEndpoint, (error, response, body) => {
  if (error) {
    console.log('Request failed. Error details:', error);
  } else {

    const data = JSON.parse(body);
    console.log("Type: ", typeof data);

    if (data.length === 0) {
      console.log(`Breed "${breedName}" not found.`);
    } else {
      console.log("Description : ", data[0].description);
    }
  }
});
