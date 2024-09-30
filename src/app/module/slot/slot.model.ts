import mongoose, { Schema } from "mongoose";
import { TSlot } from "./slot.interface";

const SlotSchema: Schema = new Schema<TSlot>(
  {
    room: {
      type: Schema.Types.ObjectId,
      ref: "Room", // Reference to the Room model
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create and export the Slot model
export const Slot = mongoose.model<TSlot>("Slot", SlotSchema);
