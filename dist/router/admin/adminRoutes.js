"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../../controller/admin/adminController");
const adminValidation_1 = require("../../middleware/validator/admin/adminValidation");
const adminAuth = (0, express_1.Router)();
adminAuth.post("/adminregister", adminValidation_1.adminRegistervalidation, adminController_1.registerAdmin);
exports.default = adminAuth;
