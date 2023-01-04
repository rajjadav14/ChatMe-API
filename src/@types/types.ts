import { Request } from "express";

export interface IUser {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  lastLoggedIn?: Date;
}

export interface IJWTPayload {
  userId: string;
  name: string;
  iat: number;
  exp: number;
}
export interface IAuthRequest extends Request {
  userId?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IError {
  status: number;
  fields: {
    name: {
      message: string;
    };
  };
  message: string;
  name: string;
}

// date sort
//console.log(w.sort((a, b) => a - b));
