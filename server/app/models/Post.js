import mongoose from "mongoose";
export default mongoose.model(
  "Post",
  new mongoose.Schema({
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    // date
  })
);