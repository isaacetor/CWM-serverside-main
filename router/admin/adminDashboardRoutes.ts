import { Router } from "express";
import { sendMessage } from "../../controller/admin/adminMsgController";

const adminDashboard = Router();

adminDashboard.post("/clienttoadmin", sendMessage);

export default adminDashboard;
