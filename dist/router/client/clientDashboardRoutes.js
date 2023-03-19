"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientMsgController_1 = require("../../controller/client/clientMsgController");
const clientDashboard = (0, express_1.Router)();
clientDashboard.post("/clienttoadmin/:userId/:adminId", clientMsgController_1.sendMessageToAdmin);
clientDashboard.get("/allclientmessages", clientMsgController_1.getAllClientMsg);
exports.default = clientDashboard;
