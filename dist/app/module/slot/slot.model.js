"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const queryMiddlewareChecking_1 = require("../../utiils/queryMiddlewareChecking");
const SlotSchema = new mongoose_1.Schema({
    roomId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Room", // Reference to the Room model
        required: true,
    },
    date: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return value >= today;
            },
            message: "Date must be present or future.",
        },
    },
    startTime: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    roomName: {
        type: String,
    },
    roomNo: {
        type: Number,
    },
    endTime: {
        type: String,
        required: true,
    },
    isBooked: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});
(0, queryMiddlewareChecking_1.queryMiddlewareChecking)(SlotSchema, "isDeleted", true);
// Create and export the Slot model
exports.Slot = mongoose_1.default.model("Slot", SlotSchema);
