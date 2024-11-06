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
exports.RoomServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const room_model_1 = require("./room.model");
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const room_constant_1 = require("./room.constant");
// create
const createRoomIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // room checking
    const isRoomExists = yield room_model_1.Room.findOne({
        roomNo: payload.roomNo,
    });
    if (isRoomExists) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "Room already exists");
    }
    const result = yield room_model_1.Room.create(payload);
    return result;
});
// get all
const getAllRoomFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // queryBuilder
    const roomQuery = new QueryBuilder_1.default(room_model_1.Room.find(), query)
        .search(room_constant_1.roomSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const meta = yield roomQuery.countTotal();
    const result = yield roomQuery.modelQuery;
    // checking data
    if (result.length === 0) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "rooms not found!");
    }
    return {
        meta,
        result,
    };
});
// get single
const getSingleRoomFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield room_model_1.Room.findById({ _id });
    // checking data
    if (result === null) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "rooms not found!");
    }
    return result;
});
// update
const updateRoomIntoDB = (_id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // room checking
    const isRoomExists = yield room_model_1.Room.findById({ _id });
    if (!isRoomExists) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "Room not found!");
    }
    const result = yield room_model_1.Room.findByIdAndUpdate({ _id }, payload, {
        new: true,
    });
    return result;
});
// update
const deleteRoomIntoDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    // room checking
    const room = yield room_model_1.Room.findById({ _id });
    if (!room) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "Room not found!");
    }
    const result = yield room_model_1.Room.findByIdAndUpdate(_id, { isDeleted: true }, {
        new: true,
    });
    return result;
});
exports.RoomServices = {
    createRoomIntoDB,
    getSingleRoomFromDB,
    getAllRoomFromDB,
    updateRoomIntoDB,
    deleteRoomIntoDB,
};
