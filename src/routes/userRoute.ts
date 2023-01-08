import express from "express";
import { Login, SignUp } from "../controllers/userController";
import errorWrapper from "../utils/errorWrapper";
import { validateBody } from "../utils/validations/requestBodyValidations";
import { loginBody, signUpBody } from "../utils/validations/validationSchemas";

const router = express.Router();

//router.route("/").get(isAuthenticatedUser, allUsers);
//router.route("/").post(registerUser);
router.route("/login").post(validateBody(loginBody), errorWrapper(Login));
router.route("/signup").post(validateBody(signUpBody), errorWrapper(SignUp));

export default router;
