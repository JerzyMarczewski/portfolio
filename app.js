const express = requre("express");
const app = express();
const ejs = require("ejs");
const fs = require("fs");

const PORT = 8000;

app.get("/", (req, res) => {
  ejs.renderFile("index.ejs", {}, {}, (err, template) => {
    if (err) throw err;
    else res.end(template);
  });
});
