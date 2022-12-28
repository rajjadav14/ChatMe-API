import { Request, Response } from "express";

export const Login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = false;

  if (user) {
    res.json({
      sucess: "true",
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
};

export const SignUp = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  const user = false;

  if (user) {
    res.json({
      sucess: "true",
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
};
