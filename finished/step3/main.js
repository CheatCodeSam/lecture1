const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
