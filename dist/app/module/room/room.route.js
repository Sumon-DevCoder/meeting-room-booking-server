"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const room_validation_1 = require("./room.validation");
const auth_1 = require("../../middlewares/auth");
const user_constant_1 = require("../user/user.constant");
const room_controller_1 = require("./room.controller");
const router = (0, express_1.Router)();
// create
router.post("/", (0, validateRequest_1.default)(room_validation_1.roomSchemaValidation.createRoomSchemaValidation), (0, auth_1.auth)(user_constant_1.USER_ROLE.admin), room_controller_1.RoomControllers.createRoom);
// get all
router.get("/", room_controller_1.RoomControllers.getAllRooms);
// get single
router.get("/:roomId", room_controller_1.RoomControllers.getSingleRooms);
// // update only user own profile
// router.put(
//   "/me",
//   validateRequest(userSchemaValidation.updateUserValidationSchema),
//   auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN, USER_ROLE.USER),
//   UserControllers.updateUser
// );
exports.RoomRoutes = router;
