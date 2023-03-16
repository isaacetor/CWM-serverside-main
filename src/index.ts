import express, { Application, Request, Response } from "express";
import dbConfig from "../config/db";
import adminDashboard from "../router/admin/adminDashboardRoutes";
import adminAuth from "../router/admin/adminRoutes";
import clientDashboard from "../router/client/clientDashboardRoutes";
import clientAuth from "../router/client/clientRoutes";
import appConfig from "./app";

const PORT = process.env.PORT || 8000;

const app: Application = express();
appConfig(app);
dbConfig();

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "api is available for consumption testing ",
  });
});

app.use("/api/clientauth", clientAuth);
app.use("/api/adminauth", adminAuth);

app.get("/api/default", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "testing my app ",
  });
});

app.use("/clientdashboard", clientDashboard);
app.use("/admindasboard", adminDashboard);

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
