import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

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
    totalAmount: {
      type: Number,
      //   required: true,
    },
    isConfirmed: {
      type: String,
      enum: ["confirmed", "unconfirmed", "canceled"], // Ensuring valid values
      default: "unconfirmed", // Default status
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

// Create and export the Booking model
export const Booking = model<TBooking>("Booking", bookingSchema);
