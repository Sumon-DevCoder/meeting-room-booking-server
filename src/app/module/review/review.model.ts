import mongoose from "mongoose";
import { TReview } from "./review.interface";

const ReviewSchema = new mongoose.Schema<TReview>({
  roomId: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  review: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  userImg: {
    type: String,
    required: true,
    trim: true,
  },
});

export const Review = mongoose.model<TReview>("Review", ReviewSchema);
