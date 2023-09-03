const express = require("express");
const { VerifyTime } = require("./middleware/verifytime");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", VerifyTime, (req, res) => {});

app.listen(3000);