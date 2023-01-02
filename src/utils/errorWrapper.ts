import { Request, Response, NextFunction } from "express";

const errorWrapper = (func: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };
};

export default errorWrapper;
