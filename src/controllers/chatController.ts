import { NextFunction, Request, Response } from "express";
import { IAuthRequest, IChatMessage, ILogin, IUser } from "../@types/types";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

import chatService from "../services/chatService";
import response from "../utils/responseCreater";

import { ObjectId } from "mongodb";

export const sendMessage = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
) => {
  const message: IChatMessage = req.body;

  if (message.sender !== req.userId)
    response.sendResponse(
      true,
      res,
      "Sender User is Different from LoggedIn user",
      StatusCodes.UNAUTHORIZED
    );
  const date_time = new Date();
  const _id = new ObjectId();

  const newChat = await chatService.saveMessage({ ...message, _id, date_time });

  response.sendResponse(false, res, ReasonPhrases.OK, StatusCodes.OK);
};
