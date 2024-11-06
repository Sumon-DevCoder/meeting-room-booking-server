"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingValidationSchema = exports.updateBookingValidationSchema = exports.createBookingValidationSchema = void 0;
const zod_1 = require("zod");
// Booking creation schema
exports.createBookingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        date: zod_1.z.string({
            required_error: "Date is required",
            invalid_type_error: "Invalid date format",
        }),
        slots: zod_1.z.string().array().min(1, {
            message: "At least one slot is required",
        }), // At least one slot required
        room: zod_1.z.string(),
        user: zod_1.z.string(),
        totalAmount: zod_1.z
            .number({
            required_error: "Total amount is required",
            invalid_type_error: "Total amount must be a number",
        })
            .positive({
            message: "Total amount must be a positive number",
        })
            .optional(),
        isConfirmed: zod_1.z
            .enum(["confirmed", "unconfirmed", "canceled"], {
            required_error: "Confirmation status is required",
        })
            .default("unconfirmed"),
        isDeleted: zod_1.z
            .boolean({
            required_error: "isDeleted flag is required",
            invalid_type_error: "isDeleted must be a boolean",
        })
            .default(false),
    }),
});
exports.updateBookingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        bookingId: zod_1.z.string({
            required_error: "Booking ID is required",
        }),
        date: zod_1.z
            .string()
            .optional()
            .refine((val) => val === undefined || !isNaN(Date.parse(val)), {
            message: "Invalid date format",
        }),
        slots: zod_1.z
            .string()
            .array()
            .min(1, {
            message: "At least one slot is required",
        })
            .optional(),
        room: zod_1.z.string().optional(),
        user: zod_1.z.string().optional(),
        totalAmount: zod_1.z
            .number({
            invalid_type_error: "Total amount must be a number",
        })
            .positive({
            message: "Total amount must be a positive number",
        })
            .optional(),
        isConfirmed: zod_1.z
            .enum(["confirmed", "unconfirmed", "canceled"], {
            required_error: "Confirmation status is required",
        })
            .optional(),
        isDeleted: zod_1.z
            .boolean({
            invalid_type_error: "isDeleted must be a boolean",
        })
            .optional(),
    }),
});
exports.bookingValidationSchema = {
    createBookingValidationSchema: exports.createBookingValidationSchema,
    updateBookingValidationSchema: exports.updateBookingValidationSchema,
};
