// TODO: Import the models
import Post from "../models/Post.js";
import client from "./client.js";

client
  .connect()
  .then(() => {
    Promise.all([
      Post.create({
        title: "Blog Title Test",
        content: "Woooooooow",
        tags: ["Test"],
        date: "01/18/2022",
      }),
    ]);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  })
  .finally(() => {
    console.log("🗃️ 🌱");
    client.close();
  });
