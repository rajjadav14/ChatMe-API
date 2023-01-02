import * as yup from "yup";
import { Request, Response, NextFunction } from "express";

export function validateBody(schema: yup.ObjectSchema<any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validatedBody = await schema.validate(req.body);
      // replace request body with validated schema object
      // so that default values are applied to the DTO
      console.log(validateBody);
      req.body = validatedBody;
      next();
    } catch (err: any) {
      res.status(401).send("Invalid Email or Password 1");
    }
  };
}
