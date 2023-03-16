import express, { Application } from "express";
import cors from "cors";

const appConfig = (app: Application) => {
  app.use(express.json()).use(cors());
  //routes

  //error handler : should be the last imported middleware in your application
};

export default appConfig;
