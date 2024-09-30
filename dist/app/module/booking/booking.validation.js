"use strict";
// import { z } from "zod";
// export const createSlotSchemaValidation = z.object({
//   room: z.string(),
//   date: z.date({
//     required_error: "Date is required",
//   }),
//   startTime: z.date({
//     required_error: "Start time is required",
//   }),
//   endTime: z.date({
//     required_error: "End time is required",
//   }),
//   isBooked: z.boolean().optional(), // Optional since it defaults to false
// });
// export const updateSlotSchemaValidation = z.object({
//   room: z.string().uuid("Invalid Room ID").optional(), // Assuming room is stored as a UUID
//   date: z.date().optional(),
//   startTime: z.date().optional(),
//   endTime: z.date().optional(),
//   isBooked: z.boolean().optional(),
// });
// export const slotValidationSchema = {
//   createSlotSchemaValidation,
//   updateSlotSchemaValidation,
// };
