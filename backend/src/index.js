const express = require("express");
//const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();


const port = process.env.PORT || 8080;
console.log("port", process.env.PORT);

const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;