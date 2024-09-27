import httpStatus from "http-status";
import { UserServices } from "./user.service";
import { Request, Response } from "express";
import catchAsync from "../../utiils/catchAsync";
import sendResponse from "../../utiils/sendResponse";

// create
const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.creatAdminIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});

// get all
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.getAllUsersFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin Data fetched successfully",
    data: result,
  });
});

// update
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.updateUserIntoDB(
    req.params.userId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User updated successfully",
    data: result,
  });
});

export const UserControllers = {
  createAdmin,
  getAllUsers,
  updateUser,
};
