// import { model, Schema } from "mongoose";
// import { TLoginUser } from "./auth.interface";

// export const loginUserSchema: Schema = new Schema<TLoginUser>(
//   {
//     email: {
//       type: String,
//       required: [true, "email is required"],
//       validate: {
//         validator: function (v: string) {
//           return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v); // Simple email regex
//         },
//         message: "Please enter a valid email address",
//       },
//       trim: true,
//     },
//     password: {
//       type: String,
//       required: [true, "password is required"],
//     },
//   },
//   { timestamps: true }
// );

// export const Login = model<TLoginUser>("Login", loginUserSchema);
