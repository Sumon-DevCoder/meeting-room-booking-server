import { Types } from "mongoose";

export type TSlot = {
  room: Types.ObjectId;
  date: Date;
  startTime: Date;
  endTime: Date;
  isBooked: boolean;
};
