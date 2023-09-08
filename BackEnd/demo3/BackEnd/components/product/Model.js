const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
  id: { type: ObjectId }, // khóa chính
  title: { type: String },
  content: { type: String },
  image: { type: String },
  createdAt: { type: String },
  category: { type: ObjectId, ref: "category" }, // khoa ngoai
  author: { type: ObjectId, ref: "author" }, // khoa ngoai
});

module.exports = mongoose.model.product || mongoose.model("product", schema);
// category -----> categories
/**
 * Database ----- Database
 * Table -------- Collection
 * Row ---------- Document
 * Column ------- Field
 */
