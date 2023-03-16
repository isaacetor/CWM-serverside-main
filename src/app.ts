import express, { Application } from "express";
import cors from "cors";
import { errorHandler } from "../middleware/error";
import clientAuth from "../router/client/clientRoutes";
import adminAuth from "../router/admin/adminRoutes";
import clientDashboard from "../router/client/clientDashboardRoutes";
import adminDashboard from "../router/admin/adminDashboardRoutes";
import { Request, Response } from "express";

const appConfig = (app: Application) => {
  app.use(express.json()).use(cors());
  //routes

  //dashboard routes

  //error handler : should be the last imported middleware in your application
  app.use(errorHandler);
};

export default appConfig;
