import { z } from "zod";
import { USER_ROLE, USER_STATUS } from "./user.constant";

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "name is required").trim(),
    role: z
      .enum([USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER], {
        required_error: "role is required",
      })
      .optional(),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "email is required")
      .trim(),
    password: z
      .string()
      .min(6, "password must be at least 6 characters")
      .min(1, "password is required"),
    status: z
      .enum([USER_STATUS.ACTIVE, USER_STATUS.BLOCKED], {
        required_error: "status is required",
      })
      .optional(), // Default status, so it's optional
  }),
});

export const updateUserValidationSchema = z.object({
  body: z
    .object({
      name: z.string().trim().optional(), // Optional for updates
      role: z
        .enum([USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER], {
          required_error: "role is required",
        })
        .optional(), // Optional for updates
      email: z.string().email("Invalid email address").trim().optional(), // Optional for updates
      password: z
        .string()
        .min(6, "password must be at least 6 characters")
        .optional(), // Optional for updates
      status: z
        .enum([USER_STATUS.ACTIVE, USER_STATUS.BLOCKED], {
          required_error: "status is required",
        })
        .optional(), // Optional for updates
    })
    .partial(), // Makes all fields optional automatically
});

export const userSchemaValidation = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
