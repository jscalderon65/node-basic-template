const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("port", PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/", require("./Routes/example.route.js"));

module.exports = app;
