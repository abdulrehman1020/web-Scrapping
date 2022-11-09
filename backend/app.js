const express = require("express");
// const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/error");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require('cors')
const app = express();

// Config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

// app.use(
//   cors({
//     origin: "http://localhost:3000",

//     credentials: true,
//   })
// );

app.use(cors())

app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload());

// Route Imports

const user = require("./routes/userRoute");
const scrapper = require("./routes/scrapper")



app.use("/api/v1", user);

app.use("/api/v1", scrapper);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors

app.use(errorMiddleware);

module.exports = app;
