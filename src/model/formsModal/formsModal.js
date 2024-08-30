import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  studentNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  previousEducation: {
    type: String,
  },
  educationTarget: {
    type: String,
  },
  address: {
    type: String,
  },
  comment: {
    type: String,
  },
  alt_number: {
    type: String,
  },
  id: {
    type: String,
  },
  courses: {
    type: String,
  },
});

export default mongoose.model("FormsModal", UserSchema);
