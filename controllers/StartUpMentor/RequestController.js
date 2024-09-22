import { Request } from "../../models/startUpMentor/MentorShipRequestModel";
import { errorHandler } from "../../utills/error.js";

// Create a new mentorship request
export const createRequest = async (req, res, next) => {
  try {
    const { mentorId, menteeId } = req.body;

    const request = new Request.create({ mentorId, menteeId });
    await request.save();

    res.status(201).json({
      message: "Request created successfully",
      request,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// Get request by ID
export const getRequestById = async (req, res, next) => {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) return next(errorHandler(401, "Request not found"));

    res.status(200).json({ request, success: true });
  } catch (error) {
    next(error);
  }
};

// Update request status (accept/reject)
export const updateRequestStatus = async (req, res, next) => {
  try {
    const request = await Request.findById(req.params.id);

    if (!request) return next(errorHandler(401, "Request not found"));

    request.status = req.body.status;
    await request.save();

    res.status(200).json({
      message: "Request updated successfully",
      request,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// Delete request
export const deleteRequest = async (req, res, next) => {
  try {
    const request = await Request.findByIdAndDelete(req.params.id);

    if (!request) return next(errorHandler(401, "Request not found"));

    res
      .status(200)
      .json({ message: "Request deleted successfully", success: true });
  } catch (error) {
    next(error);
  }
};

// Get all requests
export const getAllRequests = async (req, res, next) => {
  try {
    const requests = await Request.find();

    res.status(200).json({ requests, success: true });
  } catch (error) {
    next(error);
  }
};
