import express, { Application } from "express";
import cors from "cors";
import { errorHandler } from "../middleware/error";
import clientAuth from "../router/client/clientRoutes";
import adminAuth from "../router/admin/adminRoutes";

const appConfig = (app: Application) => {
  app.use(express.json()).use(cors());
  //routes
  app.use("/api/clientauth", clientAuth);
  app.use("/api/adminauth", adminAuth);
  //error handler : should be the last imported middleware in your application
  app.use(errorHandler);
};

export default appConfig;
