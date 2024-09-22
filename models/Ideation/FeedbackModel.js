import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    idea: { type: mongoose.Schema.Types.ObjectId, ref: "Idea" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    comment: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 3 },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
