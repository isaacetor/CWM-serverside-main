import express, { Application, Request, Response } from "express";
import dbConfig from "../config/db";
import appConfig from "./app";

const PORT = process.env.PORT || 8000;

const app: Application = express();
appConfig(app);
dbConfig();

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "api is available for consumption",
  });
});

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
