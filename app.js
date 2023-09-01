const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./src/routes")

// function which parse the body on Json with BigInt
BigInt.prototype.toJSON = function () {
  return this.toString();
}



app.use(cors());
app.use(express.json());
app.use(routes)

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listenning on port ${port}`)
})