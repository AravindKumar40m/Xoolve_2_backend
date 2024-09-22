import { Mentee } from "../../models/startUpMentor/MenteeModel.js";
import { User } from "../../models/userModel.js";
import { errorHandler } from "../../utills/error.js";

// Create a new mentee
export const createMentee = async (req, res, next) => {
  try {
    const { userId, mentorId, courseIds } = req.body;

    const user = await User.findById(userId);
    if (!user) return next(errorHandler(401, "User not found"));

    const mentee = new Mentee.create({ userId, mentorId, courseIds });
    await mentee.save();

    res
      .status(201)
      .json({ message: "Mentee created successfully", mentee, success: true });
  } catch (error) {
    next(error);
  }
};

// Get mentee by ID
export const getMenteeById = async (req, res, next) => {
  try {
    const mentee = await Mentee.findById(req.params.id);

    if (!mentee) return next(errorHandler(401, "Mentee not found"));

    res.status(200).json({ mentee, success: true });
  } catch (error) {
    next(error);
  }
};

// Update mentee profile
export const updateMentee = async (req, res, next) => {
  try {
    const mentee = await Mentee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!mentee) return next(errorHandler(401, "Mentee not found"));

    res
      .status(200)
      .json({ message: "Mentee updated successfully", mentee, success: true });
  } catch (error) {
    next(error);
  }
};

// Delete mentee
export const deleteMentee = async (req, res, next) => {
  try {
    const mentee = await Mentee.findByIdAndDelete(req.params.id);
    if (!mentee) return next(errorHandler(401, "Mentee not found"));

    res
      .status(200)
      .json({ message: "Mentee deleted successfully", success: true });
  } catch (error) {
    next(error);
  }
};

// Get all mentees
export const getAllMentees = async (req, res, next) => {
  try {
    const mentees = await Mentee.find();

    res.status(200).json({ mentees, success: true });
  } catch (error) {
    next(error);
  }
};
