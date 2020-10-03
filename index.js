const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lmoae.mongodb.net/<dbname>?retryWrites=true&w=majority`;

const app = express();
app.use(bodyParser.json());
app.use(cors())


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");

  // perform actions on the collection object
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
});


app.listen(5000)