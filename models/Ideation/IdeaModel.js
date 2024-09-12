import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    performance: {
      likes: { type: Number, default: 0 },
      views: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
  }
);

export const Idea = mongoose.model("Idea", ideaSchema);
