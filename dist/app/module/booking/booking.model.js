"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = require("mongoose");
const booking_interface_1 = require("./booking.interface");
const queryMiddlewareChecking_1 = require("../../utiils/queryMiddlewareChecking");
const bookingSchema = new mongoose_1.Schema({
    date: {
        type: Date,
        required: true,
    },
    slots: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Slot", // Reference to the Slot model
            required: true,
        },
    ],
    room: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Room", // Reference to the Room model
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
        default: 0,
    },
    email: {
        type: String,
    },
    isConfirmed: {
        type: String,
        enum: booking_interface_1.BookingStatus,
        default: booking_interface_1.BookingStatus.unconfirmed, // Default status
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
});
(0, queryMiddlewareChecking_1.queryMiddlewareChecking)(bookingSchema, "isDeleted", true);
// Create and export the Booking model
exports.Booking = (0, mongoose_1.model)("Booking", bookingSchema);
