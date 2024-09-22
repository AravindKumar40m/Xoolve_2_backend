import { Resource } from "../../models/startUpMentor/ResourceModel";
import { errorHandler } from "../../utills/error.js";

// Create a new resource
export const createResource = async (req, res, next) => {
  try {
    const { mentorId, title, description, resourceLink } = req.body;

    const resource = new Resource.create({
      mentorId,
      title,
      description,
      resourceLink,
    });
    await resource.save();

    res.status(201).json({
      message: "Resource created successfully",
      resource,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// Get resource by ID
export const getResourceById = async (req, res, next) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) return next(errorHandler(401, "Resource not found"));

    res.status(200).json({ resource, success: true });
  } catch (error) {
    next(error);
  }
};

// Update resource
export const updateResource = async (req, res, next) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!resource) return next(errorHandler(401, "Resource not found"));

    res.status(200).json({
      message: "Resource updated successfully",
      resource,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// Delete resource
export const deleteResource = async (req, res, next) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);

    if (!resource) return next(errorHandler(401, "Resource not found"));

    res
      .status(200)
      .json({ message: "Resource deleted successfully", success: true });
  } catch (error) {
    next(error);
  }
};

// Get all resources
export const getAllResources = async (req, res, next) => {
  try {
    const resources = await Resource.find();

    res.status(200).json({ resources, success: true });
  } catch (error) {
    next(error);
  }
};
