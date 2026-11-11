const express = require("express");
const mongoose = require("mongoose");

const mainRouter = require("./routes");
const errorHandler = require("./middlewares/error-handler");
const { errors } = require("celebrate");
const app = express();

app.use(express.json());
app.use(errors());
app.use(errorHandler);

app.use("/", mainRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/radiology_db")
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch(console.error);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
