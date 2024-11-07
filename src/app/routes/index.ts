import { Router } from "express";
import { UserRoutes } from "../module/user/user.route";
import { AuthRoutes } from "../module/auth/auth.route";
import { RoomRoutes } from "../module/room/room.route";
import { BookingRoutes } from "../module/booking/booking.route";
import { slotRoutes } from "../module/slot/slot.route";
import { OrderRoutes } from "../module/order/order.routes";
import { paymentRoutes } from "../module/payment/payment.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/rooms",
    route: RoomRoutes,
  },
  {
    path: "/orders",
    route: OrderRoutes,
  },
  {
    path: "/payment",
    route: paymentRoutes,
  },
  {
    path: "/bookings",
    route: BookingRoutes,
  },
  {
    path: "/my-bookings",
    route: BookingRoutes,
  },
  {
    path: "/slots",
    route: slotRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
