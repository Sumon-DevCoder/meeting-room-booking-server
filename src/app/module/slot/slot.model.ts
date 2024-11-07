import mongoose, { Schema } from "mongoose";
import { TSlot } from "./slot.interface";
import { queryMiddlewareChecking } from "../../utiils/queryMiddlewareChecking";

const SlotSchema: Schema = new Schema<TSlot>(
  {
    roomId: {
      type: Schema.Types.ObjectId,
      ref: "Room", // Reference to the Room model
      required: true,
    },
    date: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return value >= today;
        },
        message: "Date must be present or future.",
      },
    },
    startTime: {
      type: String,
      required: true,
    },
    roomName: {
      type: String,
      required: true,
    },
    roomNo: {
      type: Number,
      required: true,
    },
    endTime: {
      type: String,
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

queryMiddlewareChecking(SlotSchema, "isBooked", true);

// Create and export the Slot model
export const Slot = mongoose.model<TSlot>("Slot", SlotSchema);
