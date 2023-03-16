"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientMsgController_1 = require("../../controller/client/clientMsgController");
const clientDashboard = (0, express_1.Router)();
clientDashboard.post("/clienttoadmin/:userId/:adminId", clientMsgController_1.sendMessageToAdmin);
exports.default = clientDashboard;
