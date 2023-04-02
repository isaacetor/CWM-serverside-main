import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../../utils/asyncHandler";
import adminModel from "../../model/admin/adminModel";
import { AppError, HttpCode } from "../../utils/AppError";
import jwt, { Secret } from "jsonwebtoken";

export const registerAdmin = asyncHandler(
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
          message: "Failed to create admin",
          httpCode: HttpCode.BAD_REQUEST,
          name: AppError.name,
        })
      );
    }

    return res.status(201).json({
      message: "admin created",
      data: admin,
    });
  }
);

//single get

export const getOneAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await adminModel.findById(req.params.adminId).populate([
      {
        path: "message",
      },
      {
        path: "bills",
      },
    ]);

    return res.status(200).json({
      message: " populated all data",
      data: admin,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to get admin",
      data: error.message,
    });
  }
};

//get all admins
export const getAllAdmin = async (req: Request, res: Response) => {
  try {
    console.log("confirm");
    const admin = await adminModel.find();
    console.log("confirm");
    return res.status(200).json({
      message: "get all admins",
      data: admin,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to get admin",
      data: error,
      err: error.message,
    });
  }
};

export const adminLogin = asyncHandler(
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const { email, password } = req.body;
    const admin = await adminModel.findOne({ email });
    const secret: Secret = "letsblowbubblesandfightcrimes";
    if (!admin) {
      next(
        new AppError({
          message: "unable to login admin",
          httpCode: HttpCode.BAD_REQUEST,
          name: AppError.name,
        })
      );
    }

    return res.status(HttpCode.OK).json({
      message: "admin successfully logged in",
      data: admin,
      token: jwt.sign(
        { _id: admin?._id, email: admin?.email, password: admin?.password },
        secret,
        {
          expiresIn: "1h",
        }
      ),
    });
  }
);


