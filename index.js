const express = require('express');
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const { json } = require('body-parser');

const dotenv = require("dotenv");
const userRoute = require('./src/routes/user');
dotenv.config();

mongoose.connect((process.env.MONGODB_URI), () => {
    console.log('connect to mongo');
})
app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan("common"));

app.use("/", userRoute);
// app.get("/api", (req, res) => {
//     res.status(200).json("hello");
// })
app.listen(5002, () => {
    console.log('server is runing..');
})