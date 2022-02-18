const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;

const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const goalRouter = require("./routes/goalRoutes");
app.use("/api/goals", goalRouter);


app.use(errorHandler);

app.listen(port, () => {
  console.log("Server started on port " + port);
});