import express from "express";
import {
  createIncubator,
  createProgram,
  getIncubatorProfile,
  listResources,
} from "../controllers/businessIncubation/IncubatorController.js";

const router = express.Router();

router.post("/create", createIncubator);
router.get("/:id/profile", getIncubatorProfile);
router.get("/:id/resources", listResources);

router.post("/:incubatorId/program", createProgram);

export default router;
