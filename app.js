const express = require("express");
const app = express();
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const PORT = 8000;

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/images"));

app.get("/", (req, res) => {
  res.redirect("/pl");
});

app.get("/:lang", (req, res) => {
  console.log(req.params);

  if (req.params.lang !== "pl" && req.params.lang !== "en") res.redirect("/pl");
  else if (req.params.lang === "pl") {
    ejs.renderFile("index-pl.ejs", {}, {}, (err, template) => {
      if (err) throw err;
      else res.end(template);
    });
  } else if (req.params.lang === "en") {
    ejs.renderFile("index-en.ejs", {}, {}, (err, template) => {
      if (err) throw err;
      else res.end(template);
    });
  }
});

app.listen(PORT, (err) => {
  if (err) throw err;
  else console.log("Server is running");
});
