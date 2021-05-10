const express = require("express");

const app = new express();

app.get("/", (_req, res) => {
  res.send(`<h1>REACT IS EXCELLENT</h1>`);
});

app.listen(7777);
console.log("listening...");
