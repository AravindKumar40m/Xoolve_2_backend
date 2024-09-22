import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseDescription: {
      type: String,
      required: true,
    },
    totalSession: {
      type: Number,
      required: true,
    },
    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
      required: true,
    },
    menteeIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentee",
        required: true,
      },
    ],
    noOfSessionFinished: {
      type: Number,
      default: 0,
    },
    image: { type: String },
    rating: { type: Number },
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model("Course", CourseSchema);
