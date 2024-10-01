import httpStatus from "http-status";
import { Request, Response } from "express";
import catchAsync from "../../utiils/catchAsync";
import sendResponse from "../../utiils/sendResponse";
import { BookingServices } from "./booking.service";

// create
const createBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.createBookingIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking added successfully",
    data: result,
  });
});

// get all
const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.getAllBookingFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All bookings retrieved successfully",
    data: result,
  });
});

// // get single
// const getSingleBookings = catchAsync(async (req: Request, res: Response) => {
//   const result = await BookingServices.getSingleBookingFromDB(req.params.BookingId);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Booking retrieved successfully",
//     data: result,
//   });
// });

// update
const updateBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.updateBookingIntoDB(
    req.params.bookingId
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking updated successfully",
    data: result,
  });
});

// delete
const deleteBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.deleteBookingIntoDB(
    req.params.bookingId
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking deleted successfully",
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
  deleteBooking,
  updateBooking,
  getAllBookings,
  //   getSingleBookings,
};
