import { NextFunction, Request, Response } from "express";
import { IAuthRequest, IChatMessage, ILogin, IUser } from "../@types/types";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

import chatService from "../services/chatService";
import response from "../utils/responseCreater";

import { ObjectId } from "mongodb";
import UserService from "../services/userService";

export const sendMessage = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
) => {
  const message: IChatMessage = req.body;

  const date_time = new Date();

  const newChat = await chatService.saveMessage({ ...message, date_time });

  response.sendResponse(false, res, ReasonPhrases.OK, StatusCodes.OK);
};

export const loadContacts = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
) => {
  const currentUser = req.email || "";
  let result: {
    userName: string;
    email: string;
    content: string;
    time: Date;
  }[] = [];

  const uniqueContacts = await chatService.getUniqueContact(currentUser);

  for (const receiver of uniqueContacts) {
    console.log(receiver);
    const lastMessage = await chatService.getlastMessage(
      receiver.email,
      currentUser
    );
    result.push({ ...receiver, ...lastMessage });
  }

  result.sort((a: any, b: any) => b.time - a.time);

  response.sendResponse(false, res, "ok", 200, { result });
};
