import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TReview } from "./review.interface";
import { Review } from "./review.model";

// create
const createReviewIntoDB = async (payload: TReview) => {
  // find Review is Exists
  const ReviewIsExists = await Review.findOne({
    roomId: payload.roomId,
    userName: payload.userName,
  });

  if (ReviewIsExists) {
    throw new AppError(httpStatus.CONFLICT, "already submitted a review");
  }

  const result = await Review.create(payload);
  return result;
};

// get all
const getAllReviewFromDB = async () => {
  const result = await Review.find();

  console.log("review result", result);

  // checking data
  if (result.length === 0) {
    throw new AppError(httpStatus.NOT_FOUND, "Review not available!");
  }

  return result;
};

// get Review by user
const getReviewByRoomFromDB = async (roomId: string) => {
  const result = await Review.find({ roomId: roomId });

  console.log("room specific review result", result);

  // checking data
  if (result === null) {
    throw new AppError(httpStatus.NOT_FOUND, "Reviews not available!");
  }

  return result;
};

// get single
const getSingleReviewFromDB = async (_id: string) => {
  const result = await Review.findById({ _id });

  console.log("single review result", result);

  // checking data
  if (result === null) {
    throw new AppError(httpStatus.NOT_FOUND, "Review not available!");
  }

  return result;
};

// update
const updateReviewIntoDB = async (_id: string, payload: TReview) => {
  // Review checking
  const isReviewExists = await Review.findById({ _id });
  if (!isReviewExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Review not available!");
  }

  const result = await Review.findByIdAndUpdate(_id, payload, {
    new: true,
  });
  return result;
};

// delete
const deleteReviewIntoDB = async (_id: string) => {
  // Review checking
  const isReviewExists = await Review.findById(_id);
  if (!isReviewExists) {
    throw new AppError(httpStatus.CONFLICT, "Review not available!");
  }

  const result = await Review.findByIdAndDelete(_id, {
    new: true,
  });
  return result;
};

export const ReviewServices = {
  createReviewIntoDB,
  getSingleReviewFromDB,
  getAllReviewFromDB,
  getReviewByRoomFromDB,
  updateReviewIntoDB,
  deleteReviewIntoDB,
};
