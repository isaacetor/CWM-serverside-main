import { Router } from "express";
import { sendMessageToAdmin } from "../../controller/client/clientMsgController";

const clientDashboard = Router();

clientDashboard.post("/clienttoadmin", sendMessageToAdmin);

export default clientDashboard;
