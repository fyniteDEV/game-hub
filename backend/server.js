const express = require("express");
const cors = require("cors");
require("dotenv").config();
var morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

const rawgIoApiRoute = require("./routes/rawgio");
app.use("/api/rawgio", rawgIoApiRoute);

app.get("/", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(process.env.PORT, () =>
  console.log(`server listening on port ${process.env.PORT}`)
);
