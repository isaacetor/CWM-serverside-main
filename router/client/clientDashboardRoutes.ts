import { Router } from "express";
import { createBills } from "../../controller/admin/adminBills";
import {
  getAllClientMsg,
  sendMessageToAdmin,
} from "../../controller/client/clientMsgController";

const clientDashboard = Router();

clientDashboard.post("/clienttoadmin/:userId/:adminId", sendMessageToAdmin);
clientDashboard.get("/allclientmessages", getAllClientMsg);

export default clientDashboard;
