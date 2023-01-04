import { Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

class response {
  static createResponse() {
    return JSON.parse(
      JSON.stringify({
        status: 0,
        data: {},
        message: "",
        success: false,
        timestamp: new Date(),
      })
    );
  }

  static sendResponse(
    error: boolean,
    res: Response,
    message?: string,
    status?: number,
    data?: any
  ) {
    let responseObject = this.createResponse();

    if (error) {
      responseObject.status = status || StatusCodes.INTERNAL_SERVER_ERROR;
      responseObject.message = message || ReasonPhrases.INTERNAL_SERVER_ERROR;
    } else {
      responseObject.success = true;
      responseObject.status = StatusCodes.OK;
      responseObject.message = message || ReasonPhrases.OK;
      responseObject.data = data;
    }

    res.status(responseObject.status).send(responseObject);
  }
}

export default response;
