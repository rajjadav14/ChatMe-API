import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import ApiError from "../abstraction/apiError";

const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err) {
    console.log(err);
    const status: number = StatusCodes.INTERNAL_SERVER_ERROR;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let body: any = {
      //fields: err.fields,
      message: err.message || "An error occurred during the request.",
      name: err.name,
      status,
      stack: err.stack,
    };

    res.status(status);
    res.send(body);
  }
  next();
};

export default errorHandler;
