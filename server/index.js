import express from "express";
import { readFileSync } from "fs";
import React from "react";
import { App } from "../client/App";
import { renderToString } from "react-dom/server";

const app = new express();

app.use(express.static("dist"));

app.get("/", async (_req, res) => {
  const index = readFileSync(`public/index.html`, `utf8`);
  const rendered = renderToString(<App />);
  res.send(index.replace("{{rendered}}", rendered));
});

app.listen(7777);
console.log("listening...");
