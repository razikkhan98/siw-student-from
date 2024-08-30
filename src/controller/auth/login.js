import bcrypt from "bcrypt";
import { UserModel } from "../../model/auth/registerModal.js";

export const userLogin = async (req,res) => {
  try {
    // Check if user exists with the provided mobile number
    const user = await UserModel.findOne({ number: req?.body?.number });
    if (!user) {
      return res.json({ status: 400, message: "this number is not register" });
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(req?.body?.password, user?.password);
    if (!passwordMatch) {
      return res.json({ status: 404, message: "Password doesn't match" });
    }

    return res.json({
      status: 200,
      message: "Login successful",
      name: user?.firstName,
      date: new Date().toISOString(),
      sessionId: "sessionId"
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.json({ status: 500, message: "Server error" });
  }
};