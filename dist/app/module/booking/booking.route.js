"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const booking_validation_1 = require("./booking.validation");
const auth_1 = require("../../middlewares/auth");
const user_constant_1 = require("../user/user.constant");
const booking_controller_1 = require("./booking.controller");
const router = (0, express_1.Router)();
// create
router.post("/", (0, validateRequest_1.default)(booking_validation_1.bookingValidationSchema.createBookingValidationSchema), (0, auth_1.auth)(user_constant_1.USER_ROLE.user, user_constant_1.USER_ROLE.admin), booking_controller_1.BookingControllers.createBooking);
// get all
router.get("/", (0, auth_1.auth)(user_constant_1.USER_ROLE.admin), booking_controller_1.BookingControllers.getAllBookings);
// get booking user specific
router.get("/:userEmail", (0, auth_1.auth)(user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.user), booking_controller_1.BookingControllers.getBookingByUser);
// update
router.put("/:bookingId", (0, auth_1.auth)(user_constant_1.USER_ROLE.admin), booking_controller_1.BookingControllers.updateBooking);
// delete
router.delete("/:bookingId", (0, auth_1.auth)(user_constant_1.USER_ROLE.admin), booking_controller_1.BookingControllers.deleteBooking);
exports.BookingRoutes = router;
