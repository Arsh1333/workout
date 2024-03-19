const express = require("express");
const {
  controlWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkouts,
  updateWorkout,
} = require("../controllers/workoutControllers");

//const { createWorkout } = require("../controllers/workoutControllers");
const router = express.Router();

router.get("/", getWorkouts);
router.get("/:id", getWorkout);
router.post("/", controlWorkout);
router.delete("/:id", deleteWorkouts);
router.patch("/:id", updateWorkout);
module.exports = router;
