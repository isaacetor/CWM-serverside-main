import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import adminModel from "../../model/admin/adminModel";
import { AppError, HttpCode } from "../../utils/AppError";

export const register = asyncHandler(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { name, email, password } = req.body;

    const admin = await adminModel.create({
      name,
      email,
      password,
    });

    if (!admin) {
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
      data: admin,
    });
  }
);
