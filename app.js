const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/getall", (req, res) => {
  res.status(200).send("Hello getall");
});
app.get("/api/getone", (req, res) => {
  res.status(200).send("Hello getone");
});
app.post("/api/create", (req, res) => {
  res.status(201).send("Hello create");
});
app.put("/api/update", (req, res) => {
  res.status(200).send("Hello update");
});
app.delete("/api/delete", (req, res) => {
  res.status(200).send("Hello delete");
});


module.exports = app;
