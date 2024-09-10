import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password, role } =
      req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !password ||
      !role
    ) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(401).json({ message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      ...req.body,
      password: hashedPassword,
    });

    return res.status(200).json({
      message: "User Registed successfully.",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error. Please try again later.",
      success: false,
    });
  }
};

//  4 user table
//  profile table - userid and other stuff
//  mentor table - userid , array of studentsid , courseid
//  mentee table - userid, mentorid, cources, payemntid ,
//  course table - course name, course description, total session,  array of studentsid, mentorid, noOfSessionFinished, payemntid ,image, rating, specifyArea
//  session table - courceid, status, date and time , duration, session name
//  payment table - fromuserid, touserid, courseid, price , payment method , status
