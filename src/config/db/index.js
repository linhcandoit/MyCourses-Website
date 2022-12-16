const mongoose = require("mongoose");
// Connect to MongoDB
mongoose.set("strictQuery", false);
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
    console.log("Connect successfully");
  } catch (error) {
    console.log("Fail!");
  }
}
module.exports = { connect };
