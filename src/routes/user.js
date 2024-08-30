import express from "express";
import { userRegister } from "../controller/auth/register.js";
import { userLogin } from "../controller/auth/login.js";
import {
  createForms,
  getForms,
  updateForms,
  deleteForms,
} from "../controller/forms/serviceFormController.js";

const UserRouter = express.Router();

// User Registration
UserRouter.post("/siw/register", userRegister);

// User Login
UserRouter.post("/siw/login", userLogin);

// forms
UserRouter.post("/siw/service_form", createForms);
UserRouter.get("/siw/service_form", getForms);
UserRouter.put("/siw/service_form/:id", updateForms);
UserRouter.delete("/siw/service_form/:id", deleteForms);

export default UserRouter;
