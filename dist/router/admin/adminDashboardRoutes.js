"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminBills_1 = require("../../controller/admin/adminBills");
const adminMsgController_1 = require("../../controller/admin/adminMsgController");
const adminDashboard = (0, express_1.Router)();
adminDashboard.post("/admintoclient/:adminId/:userId", adminMsgController_1.sendMessage);
//bills
adminDashboard.post("/bills/:clientId/:adminId", adminBills_1.createBills);
exports.default = adminDashboard;
