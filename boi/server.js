const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.json({ Hello: "World" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
