import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";

// create
const createSlotIntoDB = async (payload: TSlot) => {
  // checking
  const isSlotExists = await Slot.findOne({ room: payload.room });
  if (isSlotExists) {
    throw new AppError(httpStatus.CONFLICT, "Slot already exists");
  }

  const result = await Slot.create(payload);
  return result;
};

// // get all
// const getAllSlotFromDB = async (query: Record<string, unknown>) => {
//   // queryBuilder
//   const userQuery = new QueryBuilder(Slot.find(), query)
//     .search(SlotSearchableFields)
//     .filter()
//     .sort()
//     .paginate()
//     .fields();

//   const meta = await userQuery.countTotal();
//   const result = await userQuery.modelQuery;

//   // checking data
//   if (result.length === 0) {
//     throw new AppError(httpStatus.NOT_FOUND, "Slots not found!");
//   }

//   return {
//     meta,
//     result,
//   };
// };

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
//   // user checking
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
//   // user checking
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
  //   getAllSlotFromDB,
  //   updateSlotIntoDB,
  //   deleteSlotIntoDB,
};
