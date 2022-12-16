const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.get("/register", siteController.create);
router.post("/register", siteController.register);
router.get("/search", siteController.search);
router.get("/", siteController.home);

module.exports = router;
