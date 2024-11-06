"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utiils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utiils/sendResponse"));
const slot_service_1 = require("./slot.service");
// create
const createSlot = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield slot_service_1.SlotServices.createSlotIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Slots created successfully",
        data: result,
    });
}));
// get all
const getAllSlots = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield slot_service_1.SlotServices.getAllSlotFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Available slots retrieved successfully",
        data: result,
    });
}));
// get single slots by id
const getSingleSlotsById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { slotsId } = req.params;
    const result = yield slot_service_1.SlotServices.getSingleSlotsByIdFromDB(slotsId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Slot retrieved successfully",
        data: result,
    });
}));
// get single
const getSlotByRoom = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { roomId } = req.params;
    const result = yield slot_service_1.SlotServices.getSlotByRoomFromDB(roomId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Slot retrieved successfully",
        data: result,
    });
}));
// update
const updateSlot = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield slot_service_1.SlotServices.updateSlotIntoDB(id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Slot updated successfully",
        data: result,
    });
}));
// delete
const deleteSlot = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { slotId } = req.params;
    const result = yield slot_service_1.SlotServices.deleteSlotIntoDB(slotId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Slot deleted successfully",
        data: result,
    });
}));
exports.SlotControllers = {
    createSlot,
    deleteSlot,
    updateSlot,
    getAllSlots,
    getSlotByRoom,
    getSingleSlotsById,
};
