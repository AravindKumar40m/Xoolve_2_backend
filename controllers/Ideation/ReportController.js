import { Report } from "../../models/Ideation/ReportModel";
import { errorHandler } from "../../utills/error";

export const generateReport = async (req, res, next) => {
  try {
    const { idea, reportType } = req.body;

    if (!idea || !reportType)
      return next(errorHandler(401, "something is missing..."));

    const report = new Report.create({
      idea,
      createdBy: req.user._id,
      reportType,
    });

    await report.save();

    return res.status(200).json({
      message: "Report created successfully...",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
