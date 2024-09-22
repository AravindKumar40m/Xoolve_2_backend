import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema(
  {
    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
      required: true,
    },
    menteeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentee",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Request = mongoose.model("Request", RequestSchema);

/// add courseids
