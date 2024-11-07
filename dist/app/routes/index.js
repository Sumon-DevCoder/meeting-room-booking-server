"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../module/user/user.route");
const auth_route_1 = require("../module/auth/auth.route");
const room_route_1 = require("../module/room/room.route");
const booking_route_1 = require("../module/booking/booking.route");
const slot_route_1 = require("../module/slot/slot.route");
const order_routes_1 = require("../module/order/order.routes");
const payment_route_1 = require("../module/payment/payment.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/users",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/rooms",
        route: room_route_1.RoomRoutes,
    },
    {
        path: "/orders",
        route: order_routes_1.OrderRoutes,
    },
    {
        path: "/payment",
        route: payment_route_1.paymentRoutes,
    },
    {
        path: "/bookings",
        route: booking_route_1.BookingRoutes,
    },
    {
        path: "/my-bookings",
        route: booking_route_1.BookingRoutes,
    },
    {
        path: "/slots",
        route: slot_route_1.slotRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
