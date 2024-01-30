import express from "express";
const router = express.Router();
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  getTask,
  completeTask,
} from "../controllers/taskControllers.js";
import validateToken from "../middlewares/validateToken.js";

router.use(validateToken);
router.route("/").get(getTasks).post(createTask);
router.route("/complete/:id").patch(completeTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
