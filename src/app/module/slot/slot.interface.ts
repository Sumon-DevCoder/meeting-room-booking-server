import { Types } from "mongoose";

export type TSlot = {
  roomId: Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: boolean;
};
