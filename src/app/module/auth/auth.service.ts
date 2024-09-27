import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { User } from "../user/user.model";
import { TUser } from "../user/user.interface";
import { TLoginUser } from "./auth.interface";
import { isPasswordMatched } from "./auth.utils";
import jwt from "jsonwebtoken";
import config from "../../config";
import { USER_ROLE } from "./auth.constant";

// register
const register = async (payload: TUser): Promise<any> => {
  // user checking
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new AppError(httpStatus.CONFLICT, "Already registered");
  }

  // set user role
  payload.role = USER_ROLE.USER;

  // create user
  const newUser = await User.create(payload);
  return newUser;
};

// login
const login = async (payload: TLoginUser) => {
  // checking user
  const user = await User.findOne({ email: payload.email }).select("+password");
  if (!user) {
    throw new Error("User not found!");
  }

  // checking user status
  if (user.status === "BLOCKED") {
    throw new Error("User is Blocked");
  }

  // checking isMatchPassword
  const passwordMatch = await isPasswordMatched(
    payload.password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error("Password not matched!");
  }

  // return user information using jwt
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in,
  });

  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_refresh_expires_in,
    }
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const UserServices = {
  register,
  login,
};
