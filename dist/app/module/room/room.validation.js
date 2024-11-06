"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomSchemaValidation = exports.updateRoomSchemaValidation = exports.createRoomSchemaValidation = void 0;
const zod_1 = require("zod");
exports.createRoomSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Room Name is Required"),
        roomNo: zod_1.z.number({
            required_error: "Room Number is Required",
        }),
        floorNo: zod_1.z.number({
            required_error: "Floor Number is Required",
        }),
        capacity: zod_1.z
            .number({
            required_error: "Capacity is Required",
        })
            .min(1, "Capacity must be at least 1"),
        pricePerSlot: zod_1.z
            .number({
            required_error: "Price per slot is required",
        })
            .min(0, "Price per slot cannot be negative"),
        amenities: zod_1.z.array(zod_1.z.string()).min(1, "At least one amenity is required"),
        isDeleted: zod_1.z.boolean().optional(),
        img: zod_1.z.array(zod_1.z.string()).min(3, "At least 3 img is required"),
    }),
});
exports.updateRoomSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Room Name is Required").optional(),
        roomNo: zod_1.z
            .number({
            required_error: "Room Number is Required",
        })
            .optional(),
        floorNo: zod_1.z
            .number({
            required_error: "Floor Number is Required",
        })
            .optional(),
        capacity: zod_1.z
            .number({
            required_error: "Capacity is Required",
        })
            .min(1, "Capacity must be at least 1")
            .optional(),
        pricePerSlot: zod_1.z
            .number({
            required_error: "Price per slot is required",
        })
            .min(0, "Price per slot cannot be negative")
            .optional(),
        amenities: zod_1.z
            .array(zod_1.z.string())
            .min(1, "At least one amenity is required")
            .optional(),
        isDeleted: zod_1.z.boolean().optional(),
        img: zod_1.z.array(zod_1.z.string()).min(3, "At least 3 img is required").optional(),
    }),
});
exports.roomSchemaValidation = {
    createRoomSchemaValidation: exports.createRoomSchemaValidation,
    updateRoomSchemaValidation: exports.updateRoomSchemaValidation,
};
