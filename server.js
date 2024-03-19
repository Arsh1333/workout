const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const workoutRoutes = require("./routes/workout");
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome to the app" });
// });
app.use("/api/workouts", workoutRoutes);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected");
    app.listen(process.env.PORT, () => {
      console.log("Server running on 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
