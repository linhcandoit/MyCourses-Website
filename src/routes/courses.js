const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/delete", courseController.deleteHome);
router.post("/delete", courseController.deleteAction);
router.get("/:slug", courseController.show);

module.exports = router;
