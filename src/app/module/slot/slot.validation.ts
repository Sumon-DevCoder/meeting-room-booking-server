import { z } from "zod";

export const createSlotSchemaValidation = z.object({
  body: z.object({
    roomId: z.string(),
    date: z.string({
      required_error: "Date is required",
    }),
    startTime: z.string({
      required_error: "Start time is required",
    }),
    endTime: z.string({
      required_error: "End time is required",
    }),
    isBooked: z.boolean().optional(), // Optional since it defaults to false
  }),
});

export const updateSlotSchemaValidation = z.object({
  body: z.object({
    roomId: z.string().uuid("Invalid Room ID").optional(), // Assuming room is stored as a UUID
    date: z.string().optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    isBooked: z.boolean().optional(),
  }),
});

export const slotValidationSchema = {
  createSlotSchemaValidation,
  updateSlotSchemaValidation,
};
