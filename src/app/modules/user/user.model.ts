import { model, Schema } from "mongoose";
import { UserInterface } from "./user.interface";

const userSchema = new Schema<UserInterface>({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dob: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
});

const User = model<UserInterface>("User", userSchema);
export default User;
