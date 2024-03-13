const port = 4000;
const express = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { error } = require('console');


app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://yashingale74:23h9bsmYhWbCDyT3@cluster0.plyucsf.mongodb.net/")

app.get("/",(req,res) => {
    res.send("Express is Running")
})

app.listen(port,(error) => {
    if (!error) {
        console.log("Server running on port" +port)
    }
    else {
        console.log("Error :" +error)
    }
})