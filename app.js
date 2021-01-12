const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://localhost:27017";

const fruitDocuments = [
  {
    name: "Apple",
    score: "8",
    review: "Great",
  },
  {
    name: "Orange",
    score: "6",
    review: "Nice",
  },
  {
    name: "Banana",
    score: "9",
    review: "Awesome",
  },
];

const client = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {
  try {
    await client.connect();

    const db = client.db("fruitsDB");
    const fruitsCollection = db.collection("fruits");
    const result = await fruitsCollection.insertMany(fruitDocuments);
    console.dir(result.insertedCount); // should print 3 on successful insert
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
