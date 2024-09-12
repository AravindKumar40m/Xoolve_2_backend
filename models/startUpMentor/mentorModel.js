import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    expertiesArea: [
      {
        type: String,
        required: true,
      },
    ],
    studentIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentee",
      },
    ],
    courseId: [
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
