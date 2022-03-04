const path = require("path");
const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const goalRouter = require("./routes/goalRoutes");
app.use("/api/goals", goalRouter);

const userRouter = require("./routes/userRoutes");
app.use("/api/users", userRouter);

if (process.env.NODE_ENV !== "dev") {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'));
  })
}

app.use(errorHandler);

app.listen(port, () => {
  console.log("Server started on port " + port);
});
