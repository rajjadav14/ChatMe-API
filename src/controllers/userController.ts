import { NextFunction, Request, Response } from "express";
import { ILogin, IUser } from "../@types/types";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import jwt from "jsonwebtoken";
import userService from "../services/userServices";
import response from "../utils/responseCreater";
import dotenv from "dotenv";

dotenv.config();

export const Login = async (req: Request, res: Response) => {
  const { email, password }: ILogin = req.body;

  const user = await userService.getUserByEmail(email);

  if (!user || user.password !== password)
    response.sendResponse(
      true,
      res,
      "Invalid username or password",
      StatusCodes.BAD_REQUEST
    );

  const token = jwt.sign(
    {
      userId: user!._id,
      name: user!.name,
      iat: Math.floor(Date.now() / 1000) - 30,
      exp: Math.floor(Date.now() / 1000) + 60 * 2,
    },
    process.env.JWT_SECRET!
  );

  response.sendResponse(false, res, ReasonPhrases.OK, StatusCodes.OK, {
    accessToken: token,
  });
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
