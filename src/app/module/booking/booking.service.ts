import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { BookingStatus, TBooking } from "./booking.interface";
import { Booking } from "./booking.model";
import QueryBuilder from "../../builder/QueryBuilder";
import { bookingSearchableFields } from "./booking.constant";

// create
const createBookingIntoDB = async (payload: TBooking) => {
  // Booking checking
  const room = await Booking.findOne({
    room: payload.room,
  });

  console.log(room);

  //   const totalAmount = room.pricePerSlot;

  //   console.log("totalAmount", totalAmount);

  if (room?.user === payload.user && room.room === payload.room) {
    throw new AppError(httpStatus.CONFLICT, "Already booked this room");
  }

  const result = await Booking.create(payload);
  return result;
};

// get all
const getAllBookingFromDB = async (query: Record<string, unknown>) => {
  // queryBuilder
  const BookingQuery = new QueryBuilder(
    Booking.find().populate("slots").populate("room").populate("user"),
    query
  )
    .search(bookingSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await BookingQuery.countTotal();
  const result = await BookingQuery.modelQuery;

  // checking data
  if (result.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, "Bookings not found!");
  }

  return {
    meta,
    result,
  };
};

// // get single
// const getSingleBookingFromDB = async (_id: string) => {
//   const result = await Booking.findById({ _id });

//   // checking data
//   if (result === null) {
//     throw new AppError(httpStatus.NOT_FOUND, "Bookings not found!");
//   }

//   return result;
// };

// update
const updateBookingIntoDB = async (_id: string) => {
  // Booking checking
  const isBookingExists = await Booking.findById({ _id });
  if (!isBookingExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Booking not found!");
  }

  //   console.log("id", _id);
  //   console.log("hitting server");

  const result = await Booking.findByIdAndUpdate(
    _id,
    { isConfirmed: BookingStatus.confirmed },
    {
      new: true,
    }
  );
  return result;
};

// delete
const deleteBookingIntoDB = async (_id: string) => {
  // Booking checking
  const booking = await Booking.findById({ _id });
  if (!booking) {
    throw new AppError(httpStatus.CONFLICT, "Booking not found!");
  }

  const result = await Booking.findByIdAndUpdate(
    _id,
    { isDeleted: true },
    {
      new: true,
    }
  );
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  //   getSingleBookingFromDB,
  getAllBookingFromDB,
  updateBookingIntoDB,
  deleteBookingIntoDB,
};