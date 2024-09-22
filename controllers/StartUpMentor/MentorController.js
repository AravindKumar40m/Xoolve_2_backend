import { Mentor } from "../../models/startUpMentor/mentorModel.js";
import { User } from "../../models/userModel.js";
import { errorHandler } from "../../utills/error.js";

// Create a new mentor
export const createMentor = async (req, res, next) => {
  try {
    const { userId, expertiesArea } = req.body;

    const user = await User.findById(userId);
    if (!user) return next(errorHandler(401, "User not found"));

    const mentor = new Mentor.create({ userId, expertiesArea });
    await mentor.save();

    res.status(201).json({
      message: "Mentor created successfully",
      mentor,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// Get mentor by ID
export const getMentorById = async (req, res, next) => {
  try {
    const mentor = await Mentor.findById(req.params.id);

    if (!mentor) return next(errorHandler(401, "Mentor not found"));

    res.status(200).json({ success: true, mentor });
  } catch (error) {
    next(error);
  }
};

// Update mentor profile
export const updateMentor = async (req, res, next) => {
  try {
    const mentor = await Mentor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!mentor) return next(errorHandler(401, "Mentor not found"));

    res
      .status(200)
      .json({ message: "Mentor updated successfully", mentor, success: true });
  } catch (error) {
    next(error);
  }
};

// Delete mentor
export const deleteMentor = async (req, res, next) => {
  try {
    const mentor = await Mentor.findByIdAndDelete(req.params.id);
    if (!mentor) return next(errorHandler(401, "Mentor not found"));

    res
      .status(200)
      .json({ message: "Mentor deleted successfully", success: true });
  } catch (error) {
    next(error);
  }
};

// Get all mentors
export const getAllMentors = async (req, res, next) => {
  try {
    const mentors = await Mentor.find();

    res.status(200).json(mentors);
  } catch (error) {
    next(error);
  }
};
