// import httpStatus from "http-status";
// import { TUser } from "./room.interface";
// import AppError from "../../error/AppError";
// import QueryBuilder from "../../builder/QueryBuilder";
// import { userSearchableFields } from "./room.constant";
// import { User } from "./room.model";

// // create
// const creatAdminIntoDB = async (payload: TUser) => {
//   // user checking
//   const isUserExists = await User.findOne({ email: payload.email });
//   if (isUserExists) {
//     throw new AppError(httpStatus.CONFLICT, "Already registered");
//   }

//   const result = await User.create(payload);
//   return result;
// };

// // get all
// const getAllUsersFromDB = async (query: Record<string, unknown>) => {
//   // queryBuilder
//   const userQuery = new QueryBuilder(User.find(), query)
//     .search(userSearchableFields)
//     .filter()
//     .sort()
//     .paginate()
//     .fields();

//   const meta = await userQuery.countTotal();
//   const result = await userQuery.modelQuery;

//   // checking data
//   if (result.length === 0) {
//     throw new AppError(httpStatus.NOT_FOUND, "data not found!");
//   }

//   return {
//     meta,
//     result,
//   };
// };

// // update
// const updateUserIntoDB = async (_id: string, payload: Partial<TUser>) => {
//   // user checking
//   const isUserExists = await User.findOne({ _id });
//   if (!isUserExists) {
//     throw new AppError(httpStatus.CONFLICT, "User not found!");
//   }

//   const result = await User.findByIdAndUpdate({ _id }, payload, {
//     new: true,
//   });
//   return result;
// };

// export const UserServices = {
//   creatAdminIntoDB,
//   updateUserIntoDB,
//   getAllUsersFromDB,
// };
