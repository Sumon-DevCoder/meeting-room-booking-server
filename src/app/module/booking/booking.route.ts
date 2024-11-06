import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { bookingValidationSchema } from "./booking.validation";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
import { BookingControllers } from "./booking.controller";

const router = Router();

// create
router.post(
  "/",
  validateRequest(bookingValidationSchema.createBookingValidationSchema),
  // auth(USER_ROLE.user, USER_ROLE.admin),
  BookingControllers.createBooking
);

// get all
router.get(
  "/",
  // auth(USER_ROLE.admin, USER_ROLE.user),
  BookingControllers.getAllBookings
);

// get booking by user
router.get(
  "/:email",
  // auth(USER_ROLE.admin, USER_ROLE.user),
  BookingControllers.getBookingByUser
);

// update
router.put(
  "/:bookingId",

  auth(USER_ROLE.admin),
  BookingControllers.updateBooking
);

// delete
router.delete(
  "/:bookingId",
  auth(USER_ROLE.admin, USER_ROLE.user),
  BookingControllers.deleteBooking
);

export const BookingRoutes = router;
