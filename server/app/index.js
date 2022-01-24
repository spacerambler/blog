import express from "express";
import mongoose from "mongoose";
import config from "./config.js";
// import authRoute from "./routes/auth.js";

const { port } = config;
const { db } = config;

const app = express();

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  express.static("public")
);

// app.use("/api/auth", authRoute);

app.listen(port, () => console.log("server running"));
