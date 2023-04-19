require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => {
    console.log("Connected to MongoDB")
    // console.log(process.env.MONGODB_URI)
});

app.use("/api/calendar", require("./controllers/calendar-controller"));

app.listen(5000, () => console.log("Server started"));