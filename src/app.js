const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("서버 테스트용");
});

app.listen(PORT, async () => {
  console.log(`app is listening in port ${PORT}`);
});
