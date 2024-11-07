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
exports.BookingServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const booking_model_1 = require("./booking.model");
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const booking_constant_1 = require("./booking.constant");
const room_model_1 = require("../room/room.model");
// create
const createBookingIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    // get room data base on payload
    const room = yield room_model_1.Room.findById(payload.room);
    const roomPricePerSlot = room === null || room === void 0 ? void 0 : room.pricePerSlot;
    const totalSlot = (_a = payload === null || payload === void 0 ? void 0 : payload.slots) === null || _a === void 0 ? void 0 : _a.length;
    // set total price of room slots
    const totalAmount = roomPricePerSlot * totalSlot;
    payload.totalAmount = totalAmount;
    // find Booking is Exists
    const BookingIsExists = yield booking_model_1.Booking.findOne({
        date: payload.date,
        room: payload.room,
        slots: { $in: payload.slots },
        user: payload.user,
    });
    if (BookingIsExists) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "Already booked");
    }
    const result = yield booking_model_1.Booking.create(payload);
    return result;
});
// get all
const getAllBookingFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // queryBuilder
    const BookingQuery = new QueryBuilder_1.default(booking_model_1.Booking.find().populate("slots").populate("room").populate("user"), query)
        .search(booking_constant_1.bookingSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const meta = yield BookingQuery.countTotal();
    const result = yield BookingQuery.modelQuery;
    // checking data
    if (result.length === 0) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Bookings not found!");
    }
    return {
        meta,
        result,
    };
});
// get booking by user
const getBookingByUserFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("e", email);
    const result = yield booking_model_1.Booking.find({ email: email })
        .populate("room")
        .populate("user");
    // checking data
    if (result === null) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Bookings not available!");
    }
    return result;
});
// // get single
// const getSingleBookingFromDB = async (_id: string) => {
//   const result = await Booking.findById({ _id });
//   // checking data
//   if (result === null) {
//     throw new AppError(httpStatus.NOT_FOUND, "Bookings not found!");
//   }
//   return result;
// };
// update
const updateBookingIntoDB = (_id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Booking checking
    const isBookingExists = yield booking_model_1.Booking.findById({ _id });
    if (!isBookingExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Booking not found!");
    }
    //   console.log("id", _id);
    //   console.log("hitting server");
    const result = yield booking_model_1.Booking.findByIdAndUpdate(_id, payload, {
        new: true,
    });
    return result;
});
// delete
const deleteBookingIntoDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    // Booking checking
    const booking = yield booking_model_1.Booking.findById({ _id });
    if (!booking) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "Booking not found!");
    }
    const result = yield booking_model_1.Booking.findByIdAndUpdate(_id, { isDeleted: true }, {
        new: true,
    });
    return result;
});
exports.BookingServices = {
    createBookingIntoDB,
    //   getSingleBookingFromDB,
    getAllBookingFromDB,
    getBookingByUserFromDB,
    updateBookingIntoDB,
    deleteBookingIntoDB,
};
