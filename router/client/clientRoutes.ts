import { Router } from "express";

import {
  getAllClients,
  getOneClient,
  loginClient,
  registerClient,
} from "../../controller/client/clientController";
import {
  loginValidation,
  registerValidation,
} from "../../middleware/validator/client/clientValidation";

const clientAuth = Router();

clientAuth.post("/clientregister", registerValidation, registerClient);
clientAuth.get("/:clientId", getOneClient);
clientAuth.post("/clientlogin", loginValidation, loginClient);
clientAuth.get("/", getAllClients);
export default clientAuth;
