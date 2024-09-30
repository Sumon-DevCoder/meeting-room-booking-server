import { Types } from "mongoose";

export type TBooking = {
  // user: TUser | string; // reference data
  //   slots: (TSlot | string)[]; // reference data
  date: Date;
  slots: Types.ObjectId[]; // ref
  room: Types.ObjectId; // ref
  user: Types.ObjectId; // ref
  totalAmount?: number;
  isConfirmed: "confirmed" | "unconfirmed" | "canceled";
  isDeleted: boolean;
};
