console.clear();
import express, { Application } from "express";

const app: Application = express();

const port = 4242;

const server = app.listen(port, () => {
  console.log("server is live on ", port);
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);
  server.listen(() => {
    process.exit(1);
  });
});
