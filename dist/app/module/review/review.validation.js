"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewSchemaValidation = exports.updateReviewValidationSchema = exports.createReviewValidationSchema = void 0;
const zod_1 = require("zod");
// Create validation schema
exports.createReviewValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        roomId: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid Room ID"), // MongoDB ObjectId format
        rating: zod_1.z
            .number()
            .min(1, "Rating must be at least 1")
            .max(5, "Rating cannot exceed 5"),
        review: zod_1.z.string().min(1, "Please submit your review"),
        userName: zod_1.z.string().min(1, "User name is required"),
        date: zod_1.z.date().optional(), // Optional since default value is provided in the schema
        userImg: zod_1.z.string().url("Invalid URL for user image").trim(),
    }),
});
// Update validation schema
exports.updateReviewValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        roomId: zod_1.z
            .string()
            .regex(/^[0-9a-fA-F]{24}$/, "Invalid Room ID")
            .optional(),
        rating: zod_1.z
            .number()
            .min(1, "Rating must be at least 1")
            .max(5, "Rating cannot exceed 5")
            .optional(),
        review: zod_1.z.string().min(1, "Review cannot be empty").optional(),
        userName: zod_1.z.string().min(1, "User name is required").optional(),
        date: zod_1.z.date().optional(),
        userImg: zod_1.z.string().url("Invalid URL for user image").trim().optional(),
    }),
});
exports.reviewSchemaValidation = {
    createReviewValidationSchema: exports.createReviewValidationSchema,
    updateReviewValidationSchema: exports.updateReviewValidationSchema,
};
