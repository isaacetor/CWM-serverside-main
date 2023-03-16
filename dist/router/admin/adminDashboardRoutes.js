"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminMsgController_1 = require("../../controller/admin/adminMsgController");
const adminDashboard = (0, express_1.Router)();
adminDashboard.post("/admintoclient/:adminId/:userId", adminMsgController_1.sendMessage);
exports.default = adminDashboard;
