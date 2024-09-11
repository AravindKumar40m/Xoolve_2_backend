import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utills/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
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
      return next(errorHandler(400, "Something is missing"));
    }

    const existUser = await User.findOne({ email });

    if (existUser) {
      return next(errorHandler(400, "User already exist"));
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
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(errorHandler(400, "All fields is required"));
    }

    const user = await User.findOne({ email });

    if (!user) {
      return next(errorHandler(404, "User not found"));
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return next(errorHandler(401, "Wrong credentials!"));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = user._doc;

    return res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//  4 user table
//  profile table - userid and other stuff
//  mentor table - userid , array of studentsid , courseid
//  mentee table - userid, mentorid, cources, payemntid ,
//  course table - course name, course description, total session,  array of studentsid, mentorid, noOfSessionFinished, payemntid ,image, rating, specifyArea
//  session table - courceid, status, date and time , duration, session name
//  payment table - fromuserid, touserid, courseid, price , payment method , status
