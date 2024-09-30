import mongoose, { Schema } from "mongoose";
import { TRoom } from "./room.interface";

const RoomSchema: Schema = new Schema<TRoom>({
  name: {
    type: String,
    required: [true, "Room Name is Required"],
    trim: true,
  },
  roomNo: {
    type: Number,
    required: [true, "Room Number is Required"],
    unique: true,
  },
  floorNo: {
    type: Number,
    required: [true, "Floor Number is Required"],
  },
  capacity: {
    type: Number,
    required: true,
    min: 1,
  },
  pricePerSlot: {
    type: Number,
    required: true,
    min: 0,
  },
  amenities: {
    type: [String],
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// Query Middleware
RoomSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

RoomSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

RoomSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const Room = mongoose.model<TRoom>("Room", RoomSchema);
