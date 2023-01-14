import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import response from "../utils/responseCreater";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    response.sendResponse(true, res, err.message);
  }
  next();
};

export default errorHandler;
