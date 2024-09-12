import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema(
  {
    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    resourceLink: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Resource = mongoose.model("Resource", ResourceSchema);
