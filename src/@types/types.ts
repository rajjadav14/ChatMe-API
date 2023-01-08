import { Request } from "express";
import { ObjectId } from "mongodb";

export interface IUser {
  _id?: ObjectId;
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

export interface IChatMessage {
  _id?: ObjectId;
  sender: string;
  receiver: string;
  content: string;
  date_time?: Date;
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
