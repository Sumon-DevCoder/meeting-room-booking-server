"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_1 = require("../../middlewares/auth");
const user_constant_1 = require("../user/user.constant");
const review_validation_1 = require("./review.validation");
const review_controller_1 = require("./review.controller");
const router = (0, express_1.Router)();
// create
router.post("/", (0, validateRequest_1.default)(review_validation_1.reviewSchemaValidation.createReviewValidationSchema), (0, auth_1.auth)(user_constant_1.USER_ROLE.user, user_constant_1.USER_ROLE.admin), review_controller_1.ReviewControllers.createReview);
// get all
router.get("/", (0, auth_1.auth)(user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.user), review_controller_1.ReviewControllers.getAllReviews);
// get Review by user
router.get("/:email", (0, auth_1.auth)(user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.user), review_controller_1.ReviewControllers.getReviewByRoom);
// update
router.put("/:id", (0, auth_1.auth)(user_constant_1.USER_ROLE.admin), review_controller_1.ReviewControllers.updateReview);
// delete
router.delete("/:id", (0, auth_1.auth)(user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.user), review_controller_1.ReviewControllers.deleteReview);
exports.ReviewRoutes = router;
