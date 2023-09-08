const productModel = require("./Model");

//lấy toàn bộ sản phẩm
const getAllProduct = async (page, size) => {
  try {
    // page=1,size=10
    // let skip=(page-1)*size;
    // let limit =size;

    // return data;

    return await productModel
      .find({}, "title content image createdAt category author") // select name,price from product
      .populate("category", "name") //select name from categories
      .populate("author", "name image");

    //  .sort({price:1})//sắp xếp theo giá
    //  .skip(2) //bỏ qua 2 sản phẩm tiếp theo
    //  .limit(2) //lây 2 sản phẩm tiếp theo

    // return await productModel.find();
  } catch (error) {
    console.log("Get all product error ", error);
    throw error;
  }
};

//xóa sản phẩm theo id
const deleteProductById = async (id) => {
  try {
    // const index=data.findIndex(item=> item._id.toString() ==id.toString());
    // if(index !== -1){
    //     data.splice(index, 1);
    //     return true;
    // }
    // return false;
    await productModel.findByIdAndDelete(id);
    return true;
  } catch (error) {
    console.log("Delete product error ", error);
  }
  return false;
};
const addProduct = async (
  title,
  content,
  image,
  createdAt,
  category,
  author
) => {
  try {
    const newProduct = new productModel({
      title,
      content,
      image,
      createdAt,
      category,
      author,
    });
    await newProduct.save();
    return true;
  } catch (error) {
    console.log("Add product error: ", error);
  }
  return false;
};

const updateProduct = async (
  id,
  title,
  content,
  image,
  createdAt,
  category,
  author
) => {
  try {
    const item = await productModel.findById(id);
    if (item) {
      item.title = title ? title : item.title;
      item.content = content ? content : item.content;
      item.image = image ? image : item.image;
      item.createdAt = createdAt ? createdAt : item.createdAt;
      item.category = category ? category : item.category;
      item.author = author ? author : item.author;
      await item.save();
      return true;
    }
  } catch (error) {
    console.log("update product error: ", error);
  }
};

//lấy thông tin sản phẩm theo id
const getProductById = async (id) => {
  try {
    // let product = data.find(item => item._id.toString() == id .toString());
    // return product;
    return productModel
      .findById(id)
      .populate("author", "name image")
      .populate("category", "name image");
  } catch (error) {
    console.log("Get product by Id error: ");
  }
  return null;
};

const getProductByIdAuthor = async (id) => {
  try {
    // let product = data.find(item => item._id.toString() == id .toString());
    // return product;
    return productModel.find({ author: id });
  } catch (error) {
    console.log("Get product by Id error: ");
  }
  return null;
};

const searchProduct = async (keyword) => {
  try {
    //select * from
    let query = {
      //gt:greater than ,lt:less than
      //gte:greater than or equal,lte :less than or equal
      // price :{ $gt :70,$lt:100},
      title: { $regex: keyword, $options: "i" },
      // tìm kiếm chính xác
      // name : keyword,
      // $or :[{quantity:{$gt:20}},{quantity:{$lte:5}}]
    };
    let products = await productModel
      .find(query)
      .populate("author", "name image")
      .populate("category", "name image");
    // products=await productModel.find({ },'name price');
    return products;
  } catch (error) {
    console.log("Search product error :", error);
  }
};

// Service lấy sản phẩm theo ID của danh mục
const getProductsByCategoryId = async (categoryId) => {
  try {
    const products = await productModel
      .find(
        { category: categoryId },
        "title content image createdAt category author"
      )
      .populate("category", "name")
      .populate("author", "name image");
    console.log(categoryId);
    return products;
  } catch (error) {
    console.log("Error fetching products:", error);
    throw error;
  }
};
module.exports = {
  getAllProduct,
  deleteProductById,
  addProduct,
  updateProduct,
  getProductById,
  searchProduct,
  getProductsByCategoryId,
  getProductByIdAuthor,
};

var data = [
  {
    _id: 1,
    name: "Wintheiser, Howell and Ortiz",
    price: 28,
    quantity: 43,
    image:
      "https://cdn01.dienmaycholon.vn/filewebdmclnew/public/userupload/files/news/di-dong/1-chat-gpt-la-gi-thong-tin-gioi-thieu-ve-cach-thuc-hoat-dong-cua-chat-gpt.jpg",
    category: 8,
  },
  {
    _id: 2,
    name: "Abernathy Group",
    price: 36,
    quantity: 86,
    image:
      "https://cdn01.dienmaycholon.vn/filewebdmclnew/public/userupload/files/news/di-dong/1-chat-gpt-la-gi-thong-tin-gioi-thieu-ve-cach-thuc-hoat-dong-cua-chat-gpt.jpg",
    category: 4,
  },
  {
    _id: 3,
    name: "Brakus Group",
    price: 36,
    quantity: 20,
    image:
      "https://cdn01.dienmaycholon.vn/filewebdmclnew/public/userupload/files/news/di-dong/1-chat-gpt-la-gi-thong-tin-gioi-thieu-ve-cach-thuc-hoat-dong-cua-chat-gpt.jpg",
    category: 3,
  },
  {
    _id: 4,
    name: "Roob, Mills and Bosco",
    price: 49,
    quantity: 67,
    image:
      "https://cdn01.dienmaycholon.vn/filewebdmclnew/public/userupload/files/news/di-dong/1-chat-gpt-la-gi-thong-tin-gioi-thieu-ve-cach-thuc-hoat-dong-cua-chat-gpt.jpg",
    category: 1,
  },
  {
    _id: 5,
    name: "Dare-Collins",
    price: 21,
    quantity: 46,
    image:
      "https://cdn01.dienmaycholon.vn/filewebdmclnew/public/userupload/files/news/di-dong/1-chat-gpt-la-gi-thong-tin-gioi-thieu-ve-cach-thuc-hoat-dong-cua-chat-gpt.jpg",
    category: 7,
  },
  {
    _id: 6,
    name: "Kunze Inc",
    price: 64,
    quantity: 50,
    image:
      "https://cdn01.dienmaycholon.vn/filewebdmclnew/public/userupload/files/news/di-dong/1-chat-gpt-la-gi-thong-tin-gioi-thieu-ve-cach-thuc-hoat-dong-cua-chat-gpt.jpg",
    category: 3,
  },
  {
    _id: 7,
    name: "Crist, Beahan and Mills",
    price: 40,
    quantity: 80,
    image:
      "https://cdn01.dienmaycholon.vn/filewebdmclnew/public/userupload/files/news/di-dong/1-chat-gpt-la-gi-thong-tin-gioi-thieu-ve-cach-thuc-hoat-dong-cua-chat-gpt.jpg",
    category: 5,
  },
  {
    _id: 8,
    name: "DuBuque-Von",
    price: 47,
    quantity: 21,
    image:
      "https://cdn01.dienmaycholon.vn/filewebdmclnew/public/userupload/files/news/di-dong/1-chat-gpt-la-gi-thong-tin-gioi-thieu-ve-cach-thuc-hoat-dong-cua-chat-gpt.jpg",
    category: 10,
  },
  {
    _id: 9,
    name: "Collier and Sons",
    price: 63,
    quantity: 36,
    image:
      "https://cdn01.dienmaycholon.vn/filewebdmclnew/public/userupload/files/news/di-dong/1-chat-gpt-la-gi-thong-tin-gioi-thieu-ve-cach-thuc-hoat-dong-cua-chat-gpt.jpg",
    category: 8,
  },
  {
    _id: 10,
    name: "Von, Shields and Weissnat",
    price: 40,
    quantity: 9,
    image:
      "https://cdn01.dienmaycholon.vn/filewebdmclnew/public/userupload/files/news/di-dong/1-chat-gpt-la-gi-thong-tin-gioi-thieu-ve-cach-thuc-hoat-dong-cua-chat-gpt.jpg",
    category: 3,
  },
];
