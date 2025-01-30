import express from "express";

import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controllers/taskController.js";

import auth from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/createTask", auth, createTask);

router.get("/getAllTasks", auth, getTasks);

router.get("/:id", auth, getTaskById);

router.put("/:id", auth, updateTask);

router.delete("/:id", auth, deleteTask);

export default router;
