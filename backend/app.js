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

const products = db.collection("products");

const orders = db.collection("orders");


app.get('/data' ,  async (req , res) => {
    var result = [];
    try{
        await products.find().toArray().then(response => result = [...response]);
    }
    finally{
        console.log('Data Insertion');
    }
    return res.send(result);
});


app.post('/orderItems' , async (req,res) => {
    var cartItems = req.body;
    try{
        const response = await orders.insertOne(cartItems);
        console.log(response);
    }
    finally{
        console.log('Order Items');
    }
    res.status(200).send({
        message:'Order Placed'
    })
});

app.get('/orders', async (req,res) => {
    var response;
    try{
        await orders.find().toArray().then(res => response = res);
        console.log(response);
    }
    finally{
        console.log('Orders Fetched');
    }
    res.status(200).send(response);
})



const port = process.env.PORT || 5000;
app.listen(port , () => {
    console.log(`Server Listening on Port ${port}`);
})