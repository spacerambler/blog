import express from "express";

const app = express();
const PORT = process.env.PORT || 4444;

app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  express.static("public")
);

app.listen(PORT, () => console.log("server running"));
