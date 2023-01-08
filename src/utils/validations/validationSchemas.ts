import * as yup from "yup";

export const loginBody = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().trim().required().min(8),
});

export const signUpBody = yup.object().shape({
  email: yup.string().required().email(),
  name: yup.string().required(),
  password: yup.string().trim().required().min(8),
});

export const sendMessageBody = yup.object().shape({
  sender: yup.string().required(),
  receiver: yup.string().required(),
  content: yup.string().required(),
});
