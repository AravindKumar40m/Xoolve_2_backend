import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    idea: { type: mongoose.Schema.Types.ObjectId, ref: "Idea" },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    reportType: {
      type: String,
      enum: ["Performance", "Collaboration"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Report = mongoose.model("Report", reportSchema);
