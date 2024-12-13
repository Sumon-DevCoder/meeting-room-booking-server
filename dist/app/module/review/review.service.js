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
exports.ReviewServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const review_model_1 = require("./review.model");
// create
const createReviewIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // find Review is Exists
    const ReviewIsExists = yield review_model_1.Review.findOne({
        roomId: payload.roomId,
        userName: payload.userName,
    });
    if (ReviewIsExists) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "already submitted a review");
    }
    const result = yield review_model_1.Review.create(payload);
    return result;
});
// get all
const getAllReviewFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.find();
    console.log("review result", result);
    // checking data
    if (result.length === 0) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Review not available!");
    }
    return result;
});
// get Review by user
const getReviewByRoomFromDB = (roomId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.find({ roomId: roomId });
    console.log("room specific review result", result);
    // checking data
    if (result === null) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Reviews not available!");
    }
    return result;
});
// get single
const getSingleReviewFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_model_1.Review.findById({ _id });
    console.log("single review result", result);
    // checking data
    if (result === null) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Review not available!");
    }
    return result;
});
// update
const updateReviewIntoDB = (_id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Review checking
    const isReviewExists = yield review_model_1.Review.findById({ _id });
    if (!isReviewExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Review not available!");
    }
    const result = yield review_model_1.Review.findByIdAndUpdate(_id, payload, {
        new: true,
    });
    return result;
});
// delete
const deleteReviewIntoDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    // Review checking
    const isReviewExists = yield review_model_1.Review.findById(_id);
    if (!isReviewExists) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "Review not available!");
    }
    const result = yield review_model_1.Review.findByIdAndDelete(_id, {
        new: true,
    });
    return result;
});
exports.ReviewServices = {
    createReviewIntoDB,
    getSingleReviewFromDB,
    getAllReviewFromDB,
    getReviewByRoomFromDB,
    updateReviewIntoDB,
    deleteReviewIntoDB,
};
