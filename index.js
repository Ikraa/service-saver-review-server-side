const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Initialize server");
});

app.listen(port, () => console.log("Success..."));
