import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema(
  {
    startupId: { type: mongoose.Schema.Types.ObjectId, ref: "Startup" },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Investment = mongoose.model("Investment", investmentSchema);
