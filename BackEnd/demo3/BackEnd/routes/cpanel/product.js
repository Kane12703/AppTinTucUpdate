var express = require("express");
require("dotenv").config();
var router = express.Router();
const productController = require("../../components/product/Controller");
const categoryController = require("../../components/category/Controller");
const authorController = require("../../components/Author/Controller");
const middleware = require("../../middle/UploadFile");
const UploadFile = require("../../middle/UploadFile");
const CONFIG = require("../../config/Config");
const { authenWeb } = require("../../middle/Authen");

router.get("/", [authenWeb], async (req, res, next) => {
  const products = await productController.getAllProduct();
  res.render("product/list", { products });
});

router.get("/:id/delete", [authenWeb], async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productController.deleteProductById(id);
    return res.json({ result });
  } catch (error) {
    res.json({ result: false });
    next(error);
  }
});

// hiển thị trang them moi sp
router.get("/new", [authenWeb], async (req, res, next) => {
  try {
    const categories = await categoryController.getAllCategories();
    const authores = await authorController.getAllAuthor();
    res.render("product/new", { categories, authores });
  } catch (error) {
    next(error);
  }
});
//xử lí thêm mới
router.post(
  "/new",
  [authenWeb, UploadFile.single("image")],
  async (req, res, next) => {
    try {
      let { body, file } = req;
      if (file) {
        let image = `${CONFIG.CONSTANTS.IP}/images/${file.filename}`;
        body = { ...body, image: image };
      }
      let { title, content, image, createdAt, category, author } = body;
      console.log(title, content, image, createdAt, category, author);
      await productController.addProduct(
        title,
        content,
        image,
        createdAt,
        category,
        author
      );
      console.log(title, content, image, createdAt, category, author);
      return res.redirect("/cpanel/products");
    } catch (error) {
      next(error);
    }
  }
);

// router.post('/:id/edit', [UploadFile.single('image'),], async (req, res, next) => {
//     try {

//         let { id } = req.params;
//         let { body, file } = req;
//         if (file) {
//             let image = `${CONFIG.CONSTANTS.IP}/images/${file.filename}`;
//             body = { ...body, image: image }
//         }

//         let { name, price, quantity, image, category } = body;
//         // image = 'https://i.pinimg.com/736x/39/44/28/394428dcf049dbc614b3a34cef24c164.jpg'
//         console.log(id,name, price, quantity, image, category );
//         await productController
//             .updateProduct(id,name, price, quantity, image, category);
//             return res.redirect('http://localhost:3000/cpanel/products/')

//     } catch (error) {
//         console.log('update new product error:', error)
//         next(error)
//     }
// })
//xử lí thêm mới
router.post(
  "/:id/edit",
  [authenWeb, UploadFile.single("image")],
  async (req, res, next) => {
    try {
      let { id } = req.params;

      let { body, file } = req;
      if (file) {
        let image = `${CONFIG.CONSTANTS.IP}/images/${file.filename}`;
        body = { ...body, image: image };
      }
      let { title, content, image, createdAt, category, author } = body;

      console.log(
        "post",
        id,
        title,
        content,
        image,
        createdAt,
        category,
        author
      );
      await productController.updateProduct(
        id,
        title,
        content,
        image,
        createdAt,
        category,
        author
      );
      return res.redirect("/cpanel/products");
    } catch (error) {
      next(error);
    }
  }
);

//http://localhost:3000/cpanel/products/:id/edit
//hiển thị trang cập nhật sản phẩm
router.get("/:id/edit", [authenWeb], async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productController.getProductById(id);
    let categories = await categoryController.getAllCategories();
    let authores = await authorController.getAllAuthor();
    for (let index = 0; index < categories.length; index++) {
      const element = categories[index];
      categories[index].selected = false;
      if (element._id.toString() == product.category.toString()) {
        categories[index].selected = true;
      }
    }
    for (let index = 0; index < authores.length; index++) {
      const element = authores[index];
      authores[index].selected = false;
      if (element._id.toString() == product.author.toString()) {
        authores[index].selected = true;
      }
    }
    res.render("product/edit", { product, categories, authores });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
