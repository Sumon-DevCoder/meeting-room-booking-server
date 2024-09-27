import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { userSchemaValidation } from "./user.validation";
import { UserControllers } from "./user.controller";
import { USER_ROLE } from "./user.constant";
import { auth } from "../../middlewares/auth";

const router = Router();

// create admin
router.post(
  "/create-admin",
  validateRequest(userSchemaValidation.createUserValidationSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
  UserControllers.createAdmin
);

// get all admin
router.get(
  "/",
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
  UserControllers.getAllUsers
);

// update user
router.put(
  "/:userId",
  validateRequest(userSchemaValidation.updateUserValidationSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
  UserControllers.updateUser
);

// update only user own profile
router.put(
  "/me",
  validateRequest(userSchemaValidation.updateUserValidationSchema),
  auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
  UserControllers.updateUser
);

export const UserRoutes = router;
