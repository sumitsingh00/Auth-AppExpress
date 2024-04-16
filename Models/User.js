const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,// dena hi dena hai
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,// trim true help to remove the space from start and end
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Student", "Visitor"],
  },
});

module.exports = mongoose.model("User", userSchema);
