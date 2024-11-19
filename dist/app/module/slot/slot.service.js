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
exports.SlotServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const slot_model_1 = require("./slot.model");
const slot_utils_1 = require("./slot.utils");
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
// create
const createSlotIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // checking
    const isSlotExists = yield slot_model_1.Slot.findOne({ room: payload.roomId });
    if (isSlotExists) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "Slot already exists");
    }
    const { roomId, date, startTime, endTime, isBooked } = yield slot_model_1.Slot.create(payload);
    //  now setup slot duration create functionality
    // convert time to min
    const startInMins = (0, slot_utils_1.timeToMin)(startTime);
    const endInMins = (0, slot_utils_1.timeToMin)(endTime);
    // get total duration
    const totalDuration = endInMins - startInMins;
    // calculate number of slot
    const numberOfSlot = totalDuration / slot_utils_1.slotDuration;
    // Generate slot time interval with function
    const slots = [];
    for (let i = 0; i < numberOfSlot; i++) {
        const slotStart = startInMins + i * slot_utils_1.slotDuration;
        const slotEnd = slotStart + slot_utils_1.slotDuration;
        slots.push({
            roomId,
            date,
            startTime: (0, slot_utils_1.minutesToTime)(slotStart),
            endTime: (0, slot_utils_1.minutesToTime)(slotEnd),
            isBooked,
        });
    }
    return slots;
});
// get all
const getAllSlotFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // queryBuilder
    const slotQuery = new QueryBuilder_1.default(slot_model_1.Slot.find().populate("roomId"), query)
        .filter()
        .sort()
        .paginate()
        .fields();
    const meta = yield slotQuery.countTotal();
    const result = yield slotQuery.modelQuery;
    // checking data
    if (result.length === 0) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Slots not found!");
    }
    return {
        meta,
        result,
    };
});
// getSlotByRoomFromDB
const getSlotByRoomFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield slot_model_1.Slot.find({ roomId: _id });
    // checking data
    if (result === null) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Slots not available");
    }
    return result;
});
// update
const updateSlotIntoDB = (_id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // slot checking
    const isSlotExists = yield slot_model_1.Slot.findById({ _id });
    if (!isSlotExists) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "Slot not available!");
    }
    const result = yield slot_model_1.Slot.findByIdAndUpdate({ _id }, payload, {
        new: true,
    });
    return result;
});
// delete
const deleteSlotIntoDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    // slot checking
    const SlotData = yield slot_model_1.Slot.findById({ _id });
    if (!SlotData) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "Slot not available!");
    }
    const result = yield slot_model_1.Slot.findByIdAndDelete(_id, {
        new: true,
    });
    return result;
});
exports.SlotServices = {
    createSlotIntoDB,
    getSlotByRoomFromDB,
    getAllSlotFromDB,
    updateSlotIntoDB,
    deleteSlotIntoDB,
};
