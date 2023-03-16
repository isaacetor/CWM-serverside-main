import { Router } from "express";
import { sendMessageToAdmin } from "../../controller/client/clientMsgController";

const clientDashboard = Router();

clientDashboard.post("/clienttoadmin/:userId/:adminId", sendMessageToAdmin);

export default clientDashboard;
