import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { loginUserSchemaValidation } from "./auth.validation";
import { AuthControllers } from "./auth.controller";
import { userSchemaValidation } from "../user/user.validation";

const router = Router();

// register
router.post(
  "/register",
  validateRequest(userSchemaValidation.createUserValidationSchema),
  AuthControllers.register
);

// login
router.post("/login", AuthControllers.login);
validateRequest(loginUserSchemaValidation);
export const UserRoutes = router;
