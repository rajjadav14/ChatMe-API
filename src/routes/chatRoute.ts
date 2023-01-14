import express from "express";
import {
  sendMessage,
  loadContacts,
  loadChatbox,
} from "../controllers/chatController";
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
  .route("/send-message")
  .post(
    validateBody(sendMessageBody),
    isAuthenticatedUser,
    errorWrapper(sendMessage)
  );

router
  .route("/load-contacts")
  .get(isAuthenticatedUser, errorWrapper(loadContacts));

router.route("/load-chatbox").get(loadChatbox);

export default router;
