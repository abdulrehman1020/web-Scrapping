const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");
const request = require('request')
const cheerio = require('cheerio')

request('https://www.forexfactory.com/news', (error, response, html)=>{
    if(!error && response.statusCode == 200){
        console.log(html)
    }
}
)

// Handling Uncaught Exception

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting Down the Server Due to Uncaught`);
  process.exit(1);
});

// Config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

// Connecting to database

connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

// Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting Down the Server Due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
