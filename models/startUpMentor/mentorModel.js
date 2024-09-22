import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expertiseArea: [
      {
        type: String,
        required: true,
      },
    ],
    menteeIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentee",
      },
    ],
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

export const Mentor = mongoose.model("Mentor", mentorSchema);
