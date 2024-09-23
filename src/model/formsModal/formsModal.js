import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  studentNumber: {
    type: Number,
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
  message: {
    type: String,
  },
  alt_number: {
    type: Number,
  },
  courses: {
    type: String,
  },
  paymentmethod: {
    type: String,
  },
  paymentmode: {
    type: String,
  },
  totalamount: {
    type: Number,
  },
  adjustedAmount: {
    type: Number,
  },
  emiduration:{
    type: String,
  },
  emiAmounts:{
    type: Array,
  },
  checkboxes:{
    type: Array,
  },
  selectedDates:{
    type:Array
  }
});

export default mongoose.model("FormsModal", UserSchema);
