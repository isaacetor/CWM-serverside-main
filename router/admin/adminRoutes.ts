import { Router } from "express";

import {
  getAllAdmin,
  getOneAdmin,
  registerAdmin,
} from "../../controller/admin/adminController";

import { adminRegistervalidation } from "../../middleware/validator/admin/adminValidation";
const adminAuth = Router();

adminAuth.post("/adminregister", adminRegistervalidation, registerAdmin);
adminAuth.get("/:adminId", getOneAdmin);
adminAuth.get("/", getAllAdmin);
export default adminAuth;
