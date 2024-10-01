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
router.get("/availability", SlotControllers.getAllSlots);

// // get single
// router.get("/:roomId", RoomControllers.getSingleRooms);

// // update
// router.put(
//   "/:roomId",
//   validateRequest(roomSchemaValidation.updateRoomSchemaValidation),
//   auth(USER_ROLE.admin),
//   RoomControllers.updateRoom
// );

// delete
// router.delete("/:roomId", auth(USER_ROLE.admin), RoomControllers.deleteRoom);

export const slotRoutes = router;
