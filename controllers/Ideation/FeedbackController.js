import Feedback from "../../models/Ideation/FeedbackModel";
import { errorHandler } from "../../utills/error";

export const submitFeedback = async (req, res, next) => {
  try {
    const { comment, rating } = req.body;

    if (!comment || !rating)
      return next(errorHandler(401, "something is missing..."));

    const ideaId = req.params.id;

    const feedback = new Feedback({
      idea: ideaId,
      user: req.user._id,
      comment,
      rating,
    });
    await feedback.save();

    return res.status(200).json({
      message: "Feedback submitted successfully",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const getFeedbackForIdea = async (req, res, next) => {
  try {
    const feedback = await Feedback.findById({ idea: req.params.id });

    if (!feedback) return next(errorHandler(401, "Feedback not found..."));

    return res.status(200).json(feedback);
  } catch (error) {
    next(error);
  }
};
