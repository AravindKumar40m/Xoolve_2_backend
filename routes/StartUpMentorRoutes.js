import express from "express";
import {
  createMentor,
  getMentorById,
  getAllMentors,
  updateMentor,
  deleteMentor,
} from "../controllers/StartUpMentor/MentorController.js";
import {
  createMentee,
  deleteMentee,
  getAllMentees,
  getMenteeById,
  updateMentee,
} from "../controllers/StartUpMentor/MenteeController.js";
import {
  createRequest,
  deleteRequest,
  getAllRequests,
  getRequestById,
  updateRequestStatus,
} from "../controllers/StartUpMentor/RequestController.js";
import {
  createResource,
  deleteResource,
  getAllResources,
  getResourceById,
  updateResource,
} from "../controllers/StartUpMentor/ResourceController.js";
import {
  createSession,
  deleteSession,
  getAllSessions,
  getSessionById,
  updateSession,
} from "../controllers/StartUpMentor/SessionController.js";

const router = express.Router();

// Mentor routes
router.post("/mentors", createMentor);
router.get("/mentors", getAllMentors);
router.get("/mentors/:id", getMentorById);
router.put("/mentors/:id", updateMentor);
router.delete("/mentors/:id", deleteMentor);

// Mentee routes
router.post("/mentees", createMentee);
router.get("/mentees", getAllMentees);
router.get("/mentees/:id", getMenteeById);
router.put("/mentees/:id", updateMentee);
router.delete("/mentees/:id", deleteMentee);

// Request routes
router.post("/requests", createRequest);
router.get("/requests", getAllRequests);
router.get("/requests/:id", getRequestById);
router.put("/requests/:id", updateRequestStatus);
router.delete("/requests/:id", deleteRequest);

// Resource routes
router.post("/resources", createResource);
router.get("/resources", getAllResources);
router.get("/resources/:id", getResourceById);
router.put("/resources/:id", updateResource);
router.delete("/resources/:id", deleteResource);

// Session routes
router.post("/sessions", createSession);
router.get("/sessions", getAllSessions);
router.get("/sessions/:id", getSessionById);
router.put("/sessions/:id", updateSession);
router.delete("/sessions/:id", deleteSession);

export default router;
