import httpStatus from "http-status";
import { Request, Response } from "express";
import catchAsync from "../../utiils/catchAsync";
import sendResponse from "../../utiils/sendResponse";
import { SlotServices } from "./slot.service";

// create
const createSlot = catchAsync(async (req: Request, res: Response) => {
  const result = await SlotServices.createSlotIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slots created successfully",
    data: result,
  });
});

// get all
const getAllSlots = catchAsync(async (req: Request, res: Response) => {
  const result = await SlotServices.getAllSlotFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Available slots retrieved successfully",
    data: result,
  });
});

// get single
const getSlotsByRoom = catchAsync(async (req: Request, res: Response) => {
  const result = await SlotServices.getSlotByRoomFromDB(req.params.roomId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot retrieved successfully",
    data: result,
  });
});

// update
const updateSlot = catchAsync(async (req: Request, res: Response) => {
  const result = await SlotServices.updateSlotIntoDB(
    req.params.slotId,
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot updated successfully",
    data: result,
  });
});

// delete
const deleteSlot = catchAsync(async (req: Request, res: Response) => {
  const result = await SlotServices.deleteSlotIntoDB(req.params.slotId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Slot deleted successfully",
    data: result,
  });
});

export const SlotControllers = {
  createSlot,
  deleteSlot,
  updateSlot,
  getAllSlots,
  getSlotsByRoom,
};
