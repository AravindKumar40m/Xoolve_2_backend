import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    startups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Startup" }],
    mentors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mentor" }],
    status: {
      type: String,
      enum: ["active", "completed", "upcoming"],
      default: "upcoming",
    },
  },
  {
    timestamps: true,
  }
);

export const Program = mongoose.model("Program", programSchema);
