
const express = require('express');
const app = express();
const port = 3000;



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sc9522622:Rt09b5Jx0OO12pSv@vlupinixdb.fwnwy.mongodb.net/?retryWrites=true&w=majority&appName=vlupinixdb";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  console.log('Request received');
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


