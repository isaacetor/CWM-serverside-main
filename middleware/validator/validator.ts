import { NextFunction } from "express";

import Joi from "joi";
import { AppError, HttpCode } from "../../utils/AppError";

export const validator = async (
  schemaName: Joi.ObjectSchema,
  body: object,
  next: NextFunction
): Promise<void> => {
  const value = await schemaName.validate(body, {
    allowUnknown: true,
    abortEarly: false,
    stripUnknown: true,
  });

  try {
    value.error
      ? next(
          new AppError({
            message: value.error.details[0].message,
            httpCode: HttpCode.BAD_REQUEST,
          })
        )
      : next();
  } catch (error) {
    console.log(error);
  }
};
