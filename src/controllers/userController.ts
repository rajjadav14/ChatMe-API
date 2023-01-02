import { NextFunction, Request, Response } from "express";
import { IUser } from "../utils/interfaces";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import userService from "../services/userServices";

export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = true;

  if (user) {
    res.json({
      sucess: "true",
    });
  } else {
    res.status(401).send("Invalid Email or Password");
  }
};

export const SignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, name }: IUser = req.body;

  const emailExists = await userService.getUserByEmail(email);

  if (emailExists)
    res.status(StatusCodes.BAD_GATEWAY).send({ Error: "Email already exists" });

  const newUser = await userService.saveUser({ email, password, name });

  return res.send(newUser);
};
