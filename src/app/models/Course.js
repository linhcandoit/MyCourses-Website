const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);
const Course = new Schema(
  {
    name: { type: String, maxLength: 255 },
    description: { type: String },
    image: { type: String },
    slug: { type: String },
    videoID: { type: String },
    slug: { type: String, slug: "name" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Courses", Course);
// Trong bước này bao gồm cả việc kết nối với collection trong Database.
// => model này để xác định model ( do người dùng định nghĩa) cho các document trong collection
