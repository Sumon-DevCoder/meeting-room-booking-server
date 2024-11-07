import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { auth } from "../../middlewares/auth";
import { slotValidationSchema } from "./slot.validation";
import { USER_ROLE } from "../user/user.constant";
import { SlotControllers } from "./slot.controller";

const router = Router();

// create
router.post(
  "/",
  validateRequest(slotValidationSchema.createSlotSchemaValidation),
  auth(USER_ROLE.admin),
  SlotControllers.createSlot
);

// get all
router.get(
  "/availability",
  auth(USER_ROLE.user, USER_ROLE.admin),
  SlotControllers.getAllSlots
);

// get slot by room
router.get(
  "/room/:roomId",
  auth(USER_ROLE.user, USER_ROLE.admin),
  SlotControllers.getSlotsByRoom
);

// update
router.put(
  "/:roomId",
  validateRequest(slotValidationSchema.updateSlotSchemaValidation),
  auth(USER_ROLE.admin),
  SlotControllers.updateSlot
);

// delete
router.delete("/:slotId", auth(USER_ROLE.admin), SlotControllers.deleteSlot);

export const slotRoutes = router;
