import express, { Application } from "express";
const app: Application = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;

// practise_university
// RUfmJCoUaOJM9J7n
