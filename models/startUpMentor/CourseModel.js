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
    menteeId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mentee",
        required: true,
      },
    ],
    noOfSessionFinished: {
      type: String,
    },
    image: { type: String },
    rating: { type: String },
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model("Course", CourseSchema);
