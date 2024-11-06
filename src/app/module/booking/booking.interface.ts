import { Types } from "mongoose";

export enum BookingStatus {
  confirmed = "confirmed",
  unconfirmed = "unconfirmed",
  canceled = "canceled",
}

export type TBooking = {
  date: Date;
  slots: Types.ObjectId[]; // ref
  room: Types.ObjectId; // ref
  user: Types.ObjectId; // ref
  email: string;
  totalAmount: number;
  isConfirmed: BookingStatus;
  isDeleted: boolean;
};
