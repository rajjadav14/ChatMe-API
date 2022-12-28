import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const isAuthenticatedUser = async (
  req: Request,
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
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "");

      //req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).send({
        message: "Not authorized, token failed",
      });
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401).send({
      message: "Not authorized, no token",
    });
    throw new Error("Not authorized, no token");
  }
};

export default isAuthenticatedUser;