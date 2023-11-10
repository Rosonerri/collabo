import express, { Application } from "express";

const app: Application = express();

const port = 4242;

const server = app.listen(port, () => {
  console.log("server is live on ", port);
});
