import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  name: { type: String },
  number: { type: Number },
  email: { type: String },
  password: { type: String },
});

export const UserModel = mongoose.model("User", UserSchema);
