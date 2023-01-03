import express from "express";
import { Login, SignUp } from "../controllers/userController";
import isAuthenticatedUser from "../middlewares/isAuthicatedUser";
import errorWrapper from "../utils/errorWrapper";
import { validateBody } from "../validations/requestBodyValidations";
import { loginBody, signUpBody } from "../validations/validationSchemas";

const router = express.Router();

//router.route("/").get(isAuthenticatedUser, allUsers);
//router.route("/").post(registerUser);
router.post("/login", validateBody(loginBody), errorWrapper(Login));
router.post("/signup", validateBody(signUpBody), errorWrapper(SignUp));

export default router;
