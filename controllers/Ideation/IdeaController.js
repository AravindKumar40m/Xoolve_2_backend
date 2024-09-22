import { Idea } from "../../models/Ideation/IdeaModel";
import { errorHandler } from "../../utills/error";

export const submitIdea = async (req, res, next) => {
  try {
    const { title, description, submittedBy } = req.body;

    if (!title || !description || !submittedBy)
      return next(errorHandler(401, "something is missing..."));

    const newIdea = new Idea.create({ title, description, submittedBy });

    await newIdea.save();

    return res.status(200).json({
      message: "Idea created successfully",
      newIdea,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const getIdeas = async (req, res, next) => {
  try {
    const Ideas = await Idea.find();

    return res.status(200).json({
      Ideas,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const getIdeaById = async (req, res, next) => {
  try {
    const Idea = await Idea.findById(req.params.id);

    if (!Idea) {
      return next(errorHandler(400, "Idea not found"));
    }

    return res.status(200).json({
      message: "Idea Fetched successfully",
      Idea,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const UpdateIdea = async (req, res, next) => {
  try {
    const Idea = await Idea.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!Idea) {
      return next(errorHandler(400, "Idea not found"));
    }

    return res.status(200).json({
      message: "Idea updated successfully",
      Idea,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
