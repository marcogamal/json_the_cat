const request = require("request");

const breedName = process.argv[2]
const domain = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

request(domain, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  }
const data = JSON.parse(body);
console.log(data);
// console.log(typeof data);
// const description = data[0])
// console.log('=========')
// console.log(description)
})

// example terminal: node breedFetcher.js Bengal