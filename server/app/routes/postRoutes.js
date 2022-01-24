const router = require("express").Router();
const { User, Post } = require("../../models");

// NEW POST
router.post("/", async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    Post.findAll({
      attributes: ["id", "title", "content", "photo", "tags"],
    });
    res.status(200).json(Post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ONE POST

// EDIT POST

// DELETE POST

module.exports = router;
