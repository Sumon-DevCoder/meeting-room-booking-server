import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { auth } from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
import { reviewSchemaValidation } from "./review.validation";
import { ReviewControllers } from "./review.controller";

const router = Router();

// create
router.post(
  "/",
  validateRequest(reviewSchemaValidation.createReviewValidationSchema),
  auth(USER_ROLE.user, USER_ROLE.admin),
  ReviewControllers.createReview
);

// get all
router.get(
  "/",
  auth(USER_ROLE.admin, USER_ROLE.user),
  ReviewControllers.getAllReviews
);

// get Review by user
router.get(
  "/:email",
  auth(USER_ROLE.admin, USER_ROLE.user),
  ReviewControllers.getReviewByRoom
);

// update
router.put(
  "/:id",

  auth(USER_ROLE.admin),
  ReviewControllers.updateReview
);

// delete
router.delete(
  "/:id",
  auth(USER_ROLE.admin, USER_ROLE.user),
  ReviewControllers.deleteReview
);

export const ReviewRoutes = router;
