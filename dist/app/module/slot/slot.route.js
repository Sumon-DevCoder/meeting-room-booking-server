"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slotRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = require("../../middlewares/auth");
const slot_validation_1 = require("./slot.validation");
const user_constant_1 = require("../user/user.constant");
const slot_controller_1 = require("./slot.controller");
const router = (0, express_1.Router)();
// create
router.post("/", (0, validateRequest_1.default)(slot_validation_1.slotValidationSchema.createSlotSchemaValidation), (0, auth_1.auth)(user_constant_1.USER_ROLE.admin), slot_controller_1.SlotControllers.createSlot);
// get all
router.get("/availability", (0, auth_1.auth)(user_constant_1.USER_ROLE.user, user_constant_1.USER_ROLE.admin), slot_controller_1.SlotControllers.getAllSlots);
// get slot by room
router.get("/room/:roomId", (0, auth_1.auth)(user_constant_1.USER_ROLE.user, user_constant_1.USER_ROLE.admin), slot_controller_1.SlotControllers.getSlotsByRoom);
// update
router.put("/:roomId", (0, validateRequest_1.default)(slot_validation_1.slotValidationSchema.updateSlotSchemaValidation), (0, auth_1.auth)(user_constant_1.USER_ROLE.admin), slot_controller_1.SlotControllers.updateSlot);
// delete
router.delete("/:roomId", (0, auth_1.auth)(user_constant_1.USER_ROLE.admin), slot_controller_1.SlotControllers.deleteSlot);
exports.slotRoutes = router;
