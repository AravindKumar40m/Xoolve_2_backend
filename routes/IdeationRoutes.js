import express from "express";
import {
  getIdeaById,
  getIdeas,
  submitIdea,
  UpdateIdea,
} from "../controllers/Ideation/IdeaController";
import {
  getFeedbackForIdea,
  submitFeedback,
} from "../controllers/Ideation/FeedbackController";
import { generateReport } from "../controllers/Ideation/ReportController";

const router = express.Router();

//ideas
router.get("/", getIdeas);
router.post("/", submitIdea);
router.get("/:id", getIdeaById);
router.put("/:id", UpdateIdea);

//feedback
router.post("/:ideaId", submitFeedback);
router.get("/:ideaId", getFeedbackForIdea);

//reports
// router.get('/idea/:ideaId', getReportForIdea);
router.post("/", generateReport);

export default router;
