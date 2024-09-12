import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
  {
    sessionName: {
      type: String,
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },

    status: {
      type: String,
      enum: ["held", "finished"],
    },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    duration: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Session = mongoose.model("Session", SessionSchema);
