import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import clientModel from "../../model/client/clientModel";
import { AppError, HttpCode } from "../../utils/AppError";

export const registerClient = asyncHandler(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { name, address, clientType, email, phoneNumber, password } =
      req.body;

    const client = await clientModel.create({
      name,
      address,
      clientType,
      email,
      phoneNumber,
      password,
    });

    if (!client) {
      next(
        new AppError({
          message: "Failed to create client",
          httpCode: HttpCode.BAD_REQUEST,
          name: AppError.name,
        })
      );
    }

    return res.status(201).json({
      message: "Client created",
      data: client,
    });
  }
);

export const getOneClient = async (req: Request, res: Response) => {
  try {
    const client = await clientModel.findById(req.params.clientId).populate([
      {
        path: "message",
      },
      {
        path: "bills",
      },
    ]);

    return res.status(200).json({
      message: " populated all data",
      data: client,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to get admin",
      data: error.message,
    });
  }
};
