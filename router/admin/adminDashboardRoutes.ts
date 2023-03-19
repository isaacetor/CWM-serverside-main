import { Router } from "express";
import { createBills } from "../../controller/admin/adminBills";
import {
  getAllAdminMsg,
  sendMessage,
} from "../../controller/admin/adminMsgController";

const adminDashboard = Router();

adminDashboard.post("/admintoclient/:adminId/:userId", sendMessage);

//bills
adminDashboard.post("/bills/:clientId/:adminId", createBills);
adminDashboard.get("/alladminmessages", getAllAdminMsg);

export default adminDashboard;
