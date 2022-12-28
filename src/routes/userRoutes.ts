import express from "express";
import { Login } from "../controllers/userController";
import isAuthenticatedUser from "../middlewares/isAuthicatedUser";
import { validateBody } from "../validations/requestBodyValidations";
import { loginBody, signUpBody } from "../validations/validationSchemas";

const router = express.Router();

//router.route("/").get(isAuthenticatedUser, allUsers);
//router.route("/").post(registerUser);
router.post("/login", validateBody(loginBody), Login);
router.post("/signup", validateBody(signUpBody));

export default router;
