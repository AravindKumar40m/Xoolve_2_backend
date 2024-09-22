import { Incubator } from "../../models/BussinessIncubation/IncubationModel";
import { Program } from "../../models/BussinessIncubation/ProgramModel";
import { errorHandler } from "../../utills/error";

// create Incubator
export const createIncubator = async (req, res, next) => {
  try {
    const incubator = new Incubator.create(req.body);
    await incubator.save();
    res.status(201).json({
      message: "Incubator created successfully",
      incubator,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// Get Incubator Profile
export const getIncubatorProfile = async (req, res, next) => {
  try {
    const incubator = await Incubator.findById(req.params.id);

    if (!incubator) return next(errorHandler(404, "Incubator not found"));
    res.status(200).json({ incubator, success: true });
  } catch (error) {
    next(error);
  }
};

// List Available Resources
export const listResources = async (req, res, next) => {
  try {
    const incubator = await Incubator.findById(req.params.id);

    if (!incubator) return next(errorHandler(404, "Incubator not found"));

    res
      .status(200)
      .json({ resources: incubator.profile.resources, success: true });
  } catch (error) {
    next(error);
  }
};

// Create Incubation Program
export const createProgram = async (req, res, next) => {
  try {
    const incubator = await Incubator.findById(req.params.incubatorId);

    if (!incubator) return next(errorHandler(404, "Incubator not found"));

    const program = new Program.create(req.body);

    incubator.programs.push(program._id);
    await program.save();
    await incubator.save();

    res.status(201).json({
      message: "Program created successfully",
      program,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
