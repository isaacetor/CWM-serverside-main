import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import clientModel from "../../model/client/clientModel";
import { AppError, HttpCode } from "../../utils/AppError";

export const register = asyncHandler(
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
