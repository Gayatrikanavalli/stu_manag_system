const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  branch: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  semester: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Student", StudentSchema);

