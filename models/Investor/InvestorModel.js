import mongoose from "mongoose";

const investorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    investmentPreferences: [{ type: String }],
    investments: [
      [{ type: mongoose.Schema.Types.ObjectId, ref: "Investment" }],
    ],
    portfolio: [
      {
        startupId: { type: mongoose.Schema.Types.ObjectId, ref: "Startup" },
        investmentDate: { type: Date, required: true },
        currentValuation: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Investor = mongoose.model("Investor", investorSchema);
