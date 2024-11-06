"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotValidationSchema = exports.updateSlotSchemaValidation = exports.createSlotSchemaValidation = void 0;
const zod_1 = require("zod");
exports.createSlotSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        roomId: zod_1.z.string(),
        date: zod_1.z.string({
            required_error: "Date is required",
        }),
        startTime: zod_1.z.string({
            required_error: "Start time is required",
        }),
        roomName: zod_1.z.string({
            required_error: "Room name is required",
        }),
        isDeleted: zod_1.z.boolean().optional(),
        roomNo: zod_1.z.number({
            required_error: "Room number is required",
        }),
        endTime: zod_1.z.string({
            required_error: "End time is required",
        }),
        isBooked: zod_1.z.boolean().optional(), // Optional since it defaults to false
    }),
});
exports.updateSlotSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        roomId: zod_1.z.string().optional(), // Assuming room is stored as a UUID
        date: zod_1.z.string().optional(),
        startTime: zod_1.z.string().optional(),
        endTime: zod_1.z.string().optional(),
        isDeleted: zod_1.z.boolean().optional(),
        isBooked: zod_1.z.boolean().optional(),
    }),
});
exports.slotValidationSchema = {
    createSlotSchemaValidation: exports.createSlotSchemaValidation,
    updateSlotSchemaValidation: exports.updateSlotSchemaValidation,
};
