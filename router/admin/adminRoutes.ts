import { Router } from "express";

import { registerAdmin } from "../../controller/admin/adminController";

import { adminRegistervalidation } from "../../middleware/validator/admin/adminValidation";
const adminAuth = Router();

adminAuth.post("/adminregister", adminRegistervalidation, registerAdmin);

export default adminAuth;
