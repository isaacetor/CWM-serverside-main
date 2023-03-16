import express, { Application } from "express";
import cors from "cors";
import { errorHandler } from "../middleware/error";

const appConfig = (app: Application) => {
  app.use(express.json()).use(cors());
  //routes

  //error handler : should be the last imported middleware in your application
  app.use(errorHandler);
};

export default appConfig;
