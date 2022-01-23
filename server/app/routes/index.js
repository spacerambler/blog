const router = require("express").Router();
import postRoutes from "./postRoutes";
import userRoutes from "./userRoutes";

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;
