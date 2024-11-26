const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 4000;
// middlewere
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g5uwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    const collection = client.db("phonesDB").collection("phones");

    // get document

    app.get("/phones", async (req, res) => {
      const cursor = collection.find();
      console.log("getting data from server is working perfectly");
      const result = await cursor.toArray();

      res.send(result);
    });

    // get single document
    app.get("/phones/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };

      const result = await collection.findOne(query);

      res.send(result);
    });
    // post document
    app.post("/phones", async (req, res) => {
      const document = req.body;

      console.log(document);
      const result = await collection.insertOne(document);

      res.send(result);
    });
    // delete doc
    app.delete("/phones/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await collection.deleteOne(query);

      res.send(result);
    });
  } catch (err) {
    console.log(err.message);
  }
}

run();

app.listen(port, () => {
  console.log(`The mobile api server rinning in localhost port on :${port}`);
});
