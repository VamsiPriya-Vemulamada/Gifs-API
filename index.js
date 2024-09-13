// API is application program interface which is an object already designed on web server and we now use that object, fetch the data from it and use it. As this is web server it is involved with the HTTPS methods which has GET, POST, DELETE and PUT/PATCH

// API KEY is the one which is used for encrypted data, in order to track the data we used API Keys.

// API key is just like authentication for user/client process which is used for security. SO here I've signup for the page and created API key of my own
const API_KEY =
"v3TZUJADeu3jlFL5PVUDZzhTmHrK0Y0P";

// endpoint: api.giphy.com/v1/gifs, Apikey: 
const url = `http://api.giphy.com/v1/gifs/trending?&limit=${50}&api_key=${API_KEY}`;
var xhr = `http://api.giphy.com/v1/gifs/search?q=james+bond&limit=${5}&api_key=${API_KEY}
`;
var link = `http://api.giphy.com/v1/gifs/trending?api_key=v3TZUJADeu3jlFL5PVUDZzhTmHrK0Y0P&offset=0`

// fetch is one of the xhtml request of an api which is used to reterive the data and fetch the data and then saving the resposnes in then and catch


fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {  
    
    console.log(data); // Handle the returned data (e.g., display GIFs)
  })
  .catch(error => {
    console.error('Error fetching the Giphy API:', error); // Handle errors
  });

console.log(fetch(link)) // promise fullfilled



// xhr.done(function(data) { console.log("success got data", data); });
