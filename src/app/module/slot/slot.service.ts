import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";
import {
  minutesToTime,
  slotDuration,
  slotSearchableFields,
  timeToMin,
} from "./slot.utils";
import QueryBuilder from "../../builder/QueryBuilder";

// create
const createSlotIntoDB = async (payload: TSlot) => {
  // checking
  const isSlotExists = await Slot.findOne({ room: payload.roomId });
  if (isSlotExists) {
    throw new AppError(httpStatus.CONFLICT, "Slot already exists");
  }

  const { roomId, date, startTime, endTime, isBooked } =
    await Slot.create(payload);

  //  now setup slot duration create functionality
  // convert time to min
  const startInMins = timeToMin(startTime);
  const endInMins = timeToMin(endTime);

  // get total duration
  const totalDuration = endInMins - startInMins;

  // calculate number of slot
  const numberOfSlot = totalDuration / slotDuration;

  // Generate slot time interval with function
  const slots = [];

  for (let i = 0; i < numberOfSlot; i++) {
    const slotStart = startInMins + i * slotDuration;
    const slotEnd = slotStart + slotDuration;

    slots.push({
      roomId,
      date,
      startTime: minutesToTime(slotStart),
      endTime: minutesToTime(slotEnd),
      isBooked,
    });
  }

  return slots;
};

// get all
const getAllSlotFromDB = async (query: Record<string, unknown>) => {
  // queryBuilder
  const slotQuery = new QueryBuilder(Slot.find().populate("roomId"), query)
    .search(slotSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await slotQuery.countTotal();
  const result = await slotQuery.modelQuery;

  // checking data
  if (result.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, "Slots not found!");
  }

  return {
    meta,
    result,
  };
};

// // get single
// const getSingleSlotFromDB = async (_id: string) => {
//   const result = await Slot.findById({ _id });

//   // checking data
//   if (result === null) {
//     throw new AppError(httpStatus.NOT_FOUND, "Slots not found!");
//   }

//   return result;
// };

// // update
// const updateSlotIntoDB = async (_id: string, payload: Partial<TSlot>) => {
//   // slot checking
//   const isSlotExists = await Slot.findById({ _id });
//   if (!isSlotExists) {
//     throw new AppError(httpStatus.CONFLICT, "Slot not found!");
//   }

//   const result = await Slot.findByIdAndUpdate({ _id }, payload, {
//     new: true,
//   });
//   return result;
// };

// // update
// const deleteSlotIntoDB = async (_id: string) => {
//   // slot checking
//   const Slot = await Slot.findById({ _id });
//   if (!Slot) {
//     throw new AppError(httpStatus.CONFLICT, "Slot not found!");
//   }

//   const result = await Slot.findByIdAndUpdate(
//     _id,
//     { isDeleted: true },
//     {
//       new: true,
//     }
//   );
//   return result;
// };

export const SlotServices = {
  createSlotIntoDB,
  //   getSingleSlotFromDB,
  getAllSlotFromDB,
  //   updateSlotIntoDB,
  //   deleteSlotIntoDB,
};