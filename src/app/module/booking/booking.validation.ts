import { z } from "zod";

// Booking creation schema
export const createBookingValidationSchema = z.object({
  body: z.object({
    date: z.string({
      required_error: "Date is required",
      invalid_type_error: "Invalid date format",
    }),
    slots: z.string().array().min(1, {
      message: "At least one slot is required",
    }), // At least one slot required
    room: z.string(),
    email: z.string(),
    user: z.string(),
    totalAmount: z
      .number({
        required_error: "Total amount is required",
        invalid_type_error: "Total amount must be a number",
      })
      .positive({
        message: "Total amount must be a positive number",
      })
      .optional(),
    isConfirmed: z
      .enum(["confirmed", "unconfirmed", "canceled"], {
        required_error: "Confirmation status is required",
      })
      .default("unconfirmed"),
    isDeleted: z
      .boolean({
        required_error: "isDeleted flag is required",
        invalid_type_error: "isDeleted must be a boolean",
      })
      .default(false),
  }),
});

export const updateBookingValidationSchema = z.object({
  body: z.object({
    bookingId: z.string({
      required_error: "Booking ID is required",
    }),
    date: z
      .string()
      .optional()
      .refine((val) => val === undefined || !isNaN(Date.parse(val)), {
        message: "Invalid date format",
      }),
    slots: z
      .string()
      .array()
      .min(1, {
        message: "At least one slot is required",
      })
      .optional(),
    room: z.string().optional(),
    user: z.string().optional(),
    totalAmount: z
      .number({
        invalid_type_error: "Total amount must be a number",
      })
      .positive({
        message: "Total amount must be a positive number",
      })
      .optional(),
    isConfirmed: z
      .enum(["confirmed", "unconfirmed", "canceled"], {
        required_error: "Confirmation status is required",
      })
      .optional(),
    isDeleted: z
      .boolean({
        invalid_type_error: "isDeleted must be a boolean",
      })
      .optional(),
  }),
});

export const bookingValidationSchema = {
  createBookingValidationSchema,
  updateBookingValidationSchema,
};
