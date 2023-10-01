require("dotenv").config();
const express = require("express");
const Student = require("./routers/students");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use("/api/students", Student);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB Server"));