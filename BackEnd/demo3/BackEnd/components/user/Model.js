const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const AppConstants = require("../../constants/AppConstants");

const schema = new Schema({
  id: { type: ObjectId }, // khóa chính
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: Number, default: AppConstants.ROLES.USER },
});

module.exports = mongoose.models.user || mongoose.model("user", schema);
// category -----> categories
/**
 * Database ----- Database
 * Table -------- Collection
 * Row ---------- Document
 * Column ------- Field
 */
