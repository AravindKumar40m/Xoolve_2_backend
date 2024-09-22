import mongoose from "mongoose";

const incubationSchema = new mongoose.Schema(
  {
    profile: {
      description: { type: String },
      resources: [{ type: String }],
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    programs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
  },
  {
    timestamps: true,
  }
);

export const Incubator = mongoose.model("Incubation", incubationSchema);
