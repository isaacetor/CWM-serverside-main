import { Router } from "express";

import {
  adminLogin,
  getAllAdmin,
  getOneAdmin,
  registerAdmin,
} from "../../controller/admin/adminController";

import {
  adminLoginvalidation,
  adminRegistervalidation,
} from "../../middleware/validator/admin/adminValidation";
const adminAuth = Router();

adminAuth.post("/adminregister", adminRegistervalidation, registerAdmin);
adminAuth.get("/:adminId", getOneAdmin);
adminAuth.get("/", getAllAdmin);
adminAuth.post("/adminlogin", adminLogin);
export default adminAuth;
