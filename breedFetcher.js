const request = require("request");
const fs = require("fs");

const fetchBreedDescription = function (breedName, callback) {
  request(
    "https://api.thecatapi.com/v1/breeds/search?q=siberian",
    (error, response, body) => {
      const data = JSON.parse(body);
      const desc = data[0]["description"];

      fs.readFile(body, "utf8", () => {
        if (error) {
          callback(error, null);
        }
        if (data.length === 0) {
          callback(error, null);
        } else {
          callback(null, desc);
        }
      });
    }
  );
};

// const breedName = process.argv[2];
// const domain = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
//   request(domain, (error, response, body) => {
//     if (error) {
//       console.log("error:", error);
//     }
//     const data = JSON.parse(body);
//     console.log(data);
//     console.log(typeof data);
//   });
// };
// example terminal: node breedFetcher.js Bengal

module.exports = { fetchBreedDescription };
