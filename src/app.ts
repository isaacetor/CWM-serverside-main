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
  app.use("/api/clientauth", clientAuth);
  app.use("/api/adminauth", adminAuth);

  //dashboard routes

  app.get("/api/default", (req: Request, res: Response) => {
    return res.status(200).json({
      message: "testing my app ",
    });
  });

  app.use("/clientdashboard", clientDashboard);
  app.use("/admindasboard", adminDashboard);
  //error handler : should be the last imported middleware in your application
  app.use(errorHandler);
};

export default appConfig;
