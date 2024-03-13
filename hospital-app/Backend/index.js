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

const newSchema = new mongoose.Schema({
    Username:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    }

})

const collection = mongoose.model("collection",newSchema)

module.exports=collection