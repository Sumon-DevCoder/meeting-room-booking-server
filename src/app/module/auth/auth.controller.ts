import httpStatus from "http-status";
import { AuthServices } from "./auth.service";
import { Request, Response } from "express";
import catchAsync from "../../utiils/catchAsync";
import sendResponse from "../../utiils/sendResponse";
import config from "../../config";

// register
const RegisterUser = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.register(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Registration successful",
    data: result,
  });
});

// login
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { accessToken, refreshToken } = await AuthServices.login(req.body);

  // send refresh token into cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login successfully",
    data: { accessToken },
  });
});

export const AuthControllers = {
  RegisterUser,
  loginUser,
};
