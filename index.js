const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConnection");
const userRoute = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");
connectDB();
const app = express();

app.use(express.json());
// app.use("/api/user", authRouter);
app.use("/api/user", userRoute);

const port = process.env.port;
app.listen(port || 5001, () => {
  console.log(`backend server running at ${port}`);
});
