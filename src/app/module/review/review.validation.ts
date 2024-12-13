import { z } from "zod";

// Create validation schema
export const createReviewValidationSchema = z.object({
  body: z.object({
    roomId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid Room ID"), // MongoDB ObjectId format
    rating: z
      .number()
      .min(1, "Rating must be at least 1")
      .max(5, "Rating cannot exceed 5"),
    review: z.string().min(1, "Please submit your review"),
    userName: z.string().min(1, "User name is required"),
    date: z.date().optional(), // Optional since default value is provided in the schema
    userImg: z.string().url("Invalid URL for user image").trim(),
  }),
});

// Update validation schema
export const updateReviewValidationSchema = z.object({
  body: z.object({
    roomId: z
      .string()
      .regex(/^[0-9a-fA-F]{24}$/, "Invalid Room ID")
      .optional(),
    rating: z
      .number()
      .min(1, "Rating must be at least 1")
      .max(5, "Rating cannot exceed 5")
      .optional(),
    review: z.string().min(1, "Review cannot be empty").optional(),
    userName: z.string().min(1, "User name is required").optional(),
    date: z.date().optional(),
    userImg: z.string().url("Invalid URL for user image").trim().optional(),
  }),
});

export const reviewSchemaValidation = {
  createReviewValidationSchema,
  updateReviewValidationSchema,
};
