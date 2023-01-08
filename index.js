const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;
//userName=Service_Saver
//password=sIv5sEydkpDFM95x
app.get("/", (req, res) => {
  res.send("Initialize server");
});

// connecting string

const uri =
  "mongodb+srv://Service_Saver:sIv5sEydkpDFM95x@cluster0.hornnmm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    await client.connect();
    const serviceCollection = client.db("Service_Saver").collection("Services");

    app.post("/service", async (req, res) => {
      const data = req.body;
      console.log(data);
      const result = await serviceCollection.insertOne(data);
      res.send(result);
    });
  } finally {
  }
};
run().catch(console.dir);

app.listen(port, () => console.log("Success..."));
