import mongoose from "mongoose";

const MenteeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Idea",
      required: true,
    },
    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
    },
    courseIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Mentee = mongoose.model("Mentee", MenteeSchema);
