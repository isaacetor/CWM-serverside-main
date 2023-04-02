import { Router } from "express";

import {
  getAllClients,
  getOneClient,
  loginClient,
  makeQuery,
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
clientAuth.post("/search/users" , makeQuery)
export default clientAuth;
