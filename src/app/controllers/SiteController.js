const { renderSync } = require("node-sass");
const Course = require("../models/Course");
const mongoose = require("mongoose");
const { multipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // GET/
  home(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
    // catch nhan 1 function
  }
  //GET/ SEARCH
  search(req, res) {
    res.render("search");
  }
  // GET/ REGISTER
  register(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${req.body.videoID}/maxresdefault.jpg`;
    // console.log(formData);
    const newCourse = new Course(formData);
    newCourse
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }
  create(req, res, next) {
    res.render("courses/register");
  }
}

module.exports = new SiteController();
