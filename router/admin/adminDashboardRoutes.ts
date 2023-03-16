import { Router } from "express";
import { sendMessage } from "../../controller/admin/adminMsgController";

const adminDashboard = Router();

adminDashboard.post("/admintoclient/:adminId/:userId", sendMessage);

export default adminDashboard;
