import { Schema, model } from "mongoose";
import { BookingStatus, TBooking } from "./booking.interface";
import { queryMiddlewareChecking } from "../../utiils/queryMiddlewareChecking";

const bookingSchema: Schema = new Schema<TBooking>(
  {
    date: {
      type: Date,
      required: true,
    },
    slots: [
      {
        type: Schema.Types.ObjectId,
        ref: "Slot", // Reference to the Slot model
        required: true,
      },
    ],
    room: {
      type: Schema.Types.ObjectId,
      ref: "Room", // Reference to the Room model
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    isConfirmed: {
      type: String,
      enum: BookingStatus,
      default: BookingStatus.unconfirmed, // Default status
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
);

queryMiddlewareChecking(bookingSchema, "isDeleted", true);

// Create and export the Booking model
export const Booking = model<TBooking>("Booking", bookingSchema);
