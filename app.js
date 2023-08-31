const express = require("express");
const app = express();
const cors = require("cors");

// function which parse the body on Json with BigInt
BigInt.prototype.toJSON = function () {
  return this.toString();
}

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send("Hello, World!");
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`[server] : Server listenning on port ${port}`)
})