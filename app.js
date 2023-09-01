const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./src/routes");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const verifToken = require("./src/middleware/verifToken");

// function which parse the body on Json with BigInt
BigInt.prototype.toJSON = function () {
  return this.toString();
}

app.use(cookieParser());

app.use(
  session({
    secret: "123456789azertyzza",
    saveUninitialized: true,
    resave: true,
    cookie: { httpOnly: true, secure: true, maxAge: 1000 * 60 * 60 * 24 },
  })
)

app.use(cors());
app.use(express.json());
app.use(verifToken);
app.use(routes)

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server listenning on port ${port}`)
})