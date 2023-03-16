import express, { Application, Request, Response } from "express";
import dbConfig from "../config/db";
import envVariables from "../config/envVariables";
import appConfig from "./app";

const PORT = envVariables.PORT || process.env.PORT;

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
