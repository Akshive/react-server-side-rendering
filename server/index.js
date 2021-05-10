import express from "express";
import { readFileSync } from "fs";
import React from "react";
import { App } from "../client/App";
import { renderToString } from "react-dom/server";
import { handleModifyANswerVots } from "../shared/utility";

const data = {
  questions: [
    {
      questionId: "Q1",
      content: "Should we use Jquery or Fetch for Ajax",
    },
  ],
  answers: [
    {
      answerId: "A1",
      questionId: "Q1",
      upvotes: 2,
      content: "JQuery",
    },
  ],
};

const app = new express();

app.use(express.static("dist"));
app.get("/vote/:answerId", (req, res) => {
  const { query, params } = req;
  console.log(query, params);
  data.answers = handleModifyANswerVots(
    data.answers,
    params.answerId,
    +query.increment
  );
  res.send("OK");
});

app.get("/data", async (_req, res) => {
  res.json(data);
});

app.get("/", async (_req, res) => {
  const index = readFileSync(`public/index.html`, `utf8`);
  const rendered = renderToString(<App {...data} />);
  res.send(index.replace("{{rendered}}", rendered));
});

app.listen(7777);
console.log("listening...");
