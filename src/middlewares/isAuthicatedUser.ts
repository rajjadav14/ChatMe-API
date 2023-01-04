import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { IAuthRequest, IJWTPayload } from "../@types/types";
import response from "../utils/responseCreater";

const isAuthenticatedUser = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //decodes token id
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || ""
      ) as IJWTPayload;

      req.userId = decoded.userId;
    } catch (error) {
      response.sendResponse(
        true,
        res,
        "Not authorized, token failed",
        StatusCodes.UNAUTHORIZED
      );
    }
  }

  if (!token) {
    response.sendResponse(
      true,
      res,
      "Not authorized, no token",
      StatusCodes.UNAUTHORIZED
    );
  }
};

export default isAuthenticatedUser;
