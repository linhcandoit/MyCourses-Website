const Course = require("../models/Course");
const mongoose = require("mongoose");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // GET/ courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/course", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  // GET/ courses/delete
  deleteHome(req, res) {
    res.render("courses/delete");
  }
  // POST/ courses/delete
  deleteAction(req, res, next) {
    Course.deleteOne({ name: req.body.name }).catch(next);
    res.redirect("/");
  }
}
module.exports = new CourseController();
