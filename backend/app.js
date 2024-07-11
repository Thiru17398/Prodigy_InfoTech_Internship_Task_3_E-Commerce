const express = require('express');

const app = express();

var bodyParser = require('body-parser');
const cors = require('cors');
const {MongoClient} = require('mongodb');
const path = require('path');

app.use(bodyParser.json())

app.use(cors());

const uri = "mongodb://localhost:27017";
const mongoClient = new MongoClient(uri);

const db = mongoClient.db("test");

const collection = db.collection("products");


app.get('/data' ,  async (req , res) => {
    var result = [];
    try{
        await collection.find().toArray().then(respone => result = [...respone]);
    }
    finally{
        console.log('Data Insertion');
    }
    return res.send(result);
})



const port = process.env.PORT || 5000;
app.listen(port , () => {
    console.log(`Server Listening on Port ${port}`);
})