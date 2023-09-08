const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const authorSchema = new Schema({
  id: { type: ObjectId }, // khóa chính
  name: {
    type: String, // kiểu dữ liệu
    required: true, // bắt buộc có
    unique: true, // không trùng
    trim: true, // xóa khoảng trắng ở đầu và cuối
    minlength: 3, // độ dài tối thiểu
    maxlength: 255, // độ dài tối đa
    default: "No name", // giá trị mặc định
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("author", authorSchema);
