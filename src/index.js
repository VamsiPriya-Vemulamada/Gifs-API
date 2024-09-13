
  
import  "./alerts.js";


// API is application program interface which is an object already designed on web server and we now use that object, fetch the data from it and use it. As this is web server it is involved with the HTTPS methods which has GET, POST, DELETE and PUT/PATCH

// API KEY is the one which is used for encrypted data, in order to track the data we used API Keys.

// API key is just like authentication for user/client process which is used for security. SO here I've signup for the page and created API key of my own
const API_KEY =
"v3TZUJADeu3jlFL5PVUDZzhTmHrK0Y0P";

// endpoint: api.giphy.com/v1/gifs, we need to query or do some modifications accordingly with our feature. I've used refference from postman
// here I have given the trending end point

//let url = `http://api.giphy.com/v1/gifs/trending?&limit=${50}&api_key=${API_KEY}`;

//var xhr = `http://api.giphy.com/v1/gifs/search?q=james+bond&limit=${5}&api_key=${API_KEY}
// `;
// var link = `http://api.giphy.com/v1/gifs/trending?api_key=v3TZUJADeu3jlFL5PVUDZzhTmHrK0Y0P&offset=0`




let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=30&q=`;

// schema is the one which shows how data is organized and which has keys and values.

// so now getting the images from the given data


// document.getElementById("searchButton").addEventListener("click", ev => {
//   ev.preventDefault(); //to stop the page reload
//    // here this is a search image endpoint and we have given the api key and limit value with query
//   let str = document.getElementById("searchInput").value.trim();
//   console.log(str)
//   url = url.concat(str);
//   console.log(url);


// async function getGifImages() {
   
//   try {
//     // Fetch data from the API
//     const response = await fetch(url);

//     // Check if the response is OK
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     // Parse the response to JSON
//     const data = await response.json();

//     // Log the data (you can modify this to display it on your webpage)
//     console.log(data);

//     const gifUrl = data.data.images.downsized.url;
//     console.log(gifUrl); // Check if this logs a valid URL

//     // Create an img element and set the src to the GIF URL
//     let img = document.createElement("img");
//     console.log(img);
//     img.src = "gifUrl"; // Now gifUrl is properly defined
//     img.alt = `data.data.title`; // Set the alt attribute to the GIF's title

//     // Create a caption
//     let caption = document.createElement("figcaption");
//     caption.textContent = data.data.title;

//     // Create a figure element to hold the image and caption
//     let figure = document.createElement("figure");
//     figure.appendChild(img);
//     figure.appendChild(caption);

//     // Append the figure to the DOM
//     document.querySelector(".out").appendChild(figure);

//   } catch (error) {
//     // Log errors to the console
//     //console.error(`Error fetching the Giphy API' ${error}`);
//   }
// }

// // Call the function to fetch and display the GIF
// console.log(getGifImages());`
  
// });


document.addEventListener("DOMContentLoaded", cursor); // adding event listener for search button
      function cursor() {
        document.getElementById("searchButton").addEventListener("click", ev => {
          ev.preventDefault(); //to stop the page reload
          let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&q=`; // taken the search api key and the gave the query details, api end point is api.giphy.com/v1, here we have used https so, there may be security issues
          let str = document.getElementById("searchInput").value.trim();
          url = url.concat(str); // concating the string value into url
          console.log(url);
        
          fetch(url) // fetching the data into url and giving them in the then promises 

            .then(response => response.json()) // saving the json respon Returns a promise that resolves with the result of parsing the response body text as JSON.
 

            .then(content => {
              //  data, pagination, meta
              console.log(content.data); // gives the content data from url
              console.log("META", content.meta); // gives the meta data from url
              let fig = document.createElement("figure");
              let img = document.createElement("img");
              let fc = document.createElement("figcaption");
              img.src = content.data[0].images.downsized.url; // these are from the json files
              img.alt = content.data[0].title; // saving the content of file in alt 
              fc.textContent = content.data[0].title;
              fig.appendChild(img); // appending the image to figure
              fig.appendChild(fc); // appending the tag line to figure
              let out = document.querySelector(".out");
              out.insertAdjacentElement("afterbegin", fig);
              document.querySelector("#searchInput").value = "";
            })
            .catch(err => {
              console.error(err);
            })
          
        })
      }
    

      