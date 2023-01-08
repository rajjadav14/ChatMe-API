import express from "express";
import { sendMessage } from "../controllers/chatController";
import { Login, SignUp } from "../controllers/userController";
import isAuthenticatedUser from "../middleware/isAuthenticatedUser";
import errorWrapper from "../utils/errorWrapper";
import { validateBody } from "../utils/validations/requestBodyValidations";
import {
  sendMessageBody,
  signUpBody,
} from "../utils/validations/validationSchemas";

const router = express.Router();

router
  .route("/sendmessage")
  .post(
    validateBody(sendMessageBody),
    isAuthenticatedUser,
    errorWrapper(sendMessage)
  );

export default router;
