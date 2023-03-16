import express, { Application } from "express";
import dbConfig from "../config/db";
import envVariables from "../config/envVariables";
import appConfig from "./app";

const PORT = envVariables.PORT;

const app: Application = express();
appConfig(app);
dbConfig();

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
