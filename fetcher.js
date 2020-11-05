const fs = require("fs");
const request = require("request");

const fileWriter = (url, path) => {
  request(url, (error, response, body) => {
    if (error) {
      console.log("error:", error); // Print the error if one occurred
    }
    fs.writeFile(path, response, (error) => {
      console.log(`Downloaded and saved ${body.length} byte to ${url}`);
    });
  });
};

const pageFetcher = () => {
  const args = process.argv;
  let input = args.slice(2, args.length);
  const url = input[0];
  const path = input[1];

  if (!fs.existsSync(path)) {
    fileWriter(url, path);
  }
};

pageFetcher();
