const productService = require("./Service");

const getAllProduct = async () => {
  try {
    return await productService.getAllProduct();
  } catch (error) {
    console.log("Get all product error ", error);
    throw error;
  }
};

const deleteProductById = async (id) => {
  try {
    return await productService.deleteProductById(id);
  } catch (error) {
    console.log("Delete product error ", error);
    return false;
  }
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
    console.log(
      "Add params: ",
      title,
      content,
      image,
      createdAt,
      category,
      author
    );

    return await productService.addProduct(
      title,
      content,
      image,
      createdAt,
      category,
      author
    );
  } catch (error) {
    return false;
  }
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
    return await productService.updateProduct(
      id,
      title,
      content,
      image,
      createdAt,
      category,
      author
    );
  } catch (error) {
    console.log("Update product error: ", error);
  }
};
const getProductById = async (id) => {
  try {
    return await productService.getProductById(id);
  } catch (error) {
    console.log("Get product by id error: ", error);
  }
};

const getProductByIdAuthour = async (idAuthor) => {
  try {
    return await productService.getProductByIdAuthor(idAuthor);
  } catch (error) {
    console.log("Get product by id error: ", error);
  }
};

const searchProduct = async (title) => {
  try {
    return await productService.searchProduct(title);
  } catch (error) {
    console.log("Search product error: ", error);
  }
  return null;
};

const getProductByIdCategory = async (categoryId) => {
  try {
    return await productService.getProductsByCategoryId(categoryId);
  } catch (error) {
    console.log("Search product error: ", error);
  }
  return null;
};

//   const updateProduct

module.exports = {
  getAllProduct,
  deleteProductById,
  addProduct,
  updateProduct,
  getProductById,
  searchProduct,
  getProductByIdCategory,
  getProductByIdAuthour,
};
