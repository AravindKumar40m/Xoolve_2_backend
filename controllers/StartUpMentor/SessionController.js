import { Session } from "../../models/startUpMentor/SessionModel";
import { errorHandler } from "../../utills/error.js";

// Create a new session
export const createSession = async (req, res, next) => {
  try {
    const { mentorId, menteeId, date, duration } = req.body;

    const session = new Session.create({ mentorId, menteeId, date, duration });
    await session.save();

    res.status(201).json({
      message: "session created successfully",
      session,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// Get session by ID
export const getSessionById = async (req, res, next) => {
  try {
    const session = await Session.findById(req.params.id);

    if (!session) return next(errorHandler(401, "Session not found"));

    res.status(200).json({ session, success: true });
  } catch (error) {
    next(error);
  }
};

// Update session
export const updateSession = async (req, res, next) => {
  try {
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!session) return next(errorHandler(401, "Session not found"));

    res.status(200).json({
      message: "session updated successfully",
      session,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// Delete session
export const deleteSession = async (req, res, next) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);

    if (!session) return next(errorHandler(401, "Session not found"));

    res
      .status(200)
      .json({ message: "Session deleted successfully", success: true });
  } catch (error) {
    next(error);
  }
};

// Get all sessions
export const getAllSessions = async (req, res, next) => {
  try {
    const sessions = await Session.find();

    res.status(200).json({ sessions, success: true });
  } catch (error) {
    next(error);
  }
};
