import mongoose from "mongoose";

const startupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    founder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    industry: { type: String, required: true },
    description: { type: String, required: true },
    fundingReceived: { type: Number, default: 0 },
    incubationProgram: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Incubator",
    },
    mentors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mentor" }],
    investors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Investor" }],
  },
  {
    timestamps: true,
  }
);

export const Startup = mongoose.model("Startup", startupSchema);
