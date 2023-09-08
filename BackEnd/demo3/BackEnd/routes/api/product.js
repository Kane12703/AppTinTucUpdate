var express = require("express");
var router = express.Router();

const productController = require("../../components/product/Controller");
const categoryController = require("../../components/category/Controller");
const authorController = require("../../components/Author/Controller");
const { authenAPI } = require("../../middle/Authen");
const upload = require("../../middle/UploadFile");

router.get("/get-all", [], async (req, res, next) => {
  try {
    const products = await productController.getAllProduct();
    return res.status(200).json({ result: true, products });
  } catch (error) {
    return res.status(500).json({ result: false, products: null });
  }
});

router.post("/get-byIdCategory", async (req, res, next) => {
  try {
    const categoryId = req.body.id;
    const products = await productController.getProductByIdCategory(categoryId);
    console.log("===========");
    return res.status(200).json({ result: true, products });
  } catch (error) {
    console.error(`Error while getting products by category: ${error}`);
    return res.status(500).json({ result: false, error: error.message });
  }
});

router.get("/get-all-category", [], async (req, res, next) => {
  try {
    const allCategory = await categoryController.getAllCategories();
    return res.status(200).json({ result: true, allCategory });
  } catch (error) {
    return res.status(500).json({ result: false, products: null });
  }
});

router.get("/get-all-author", [], async (req, res, next) => {
  try {
    const allAuthor = await authorController.getAllAuthor();
    return res.status(200).json({ result: true, allAuthor });
  } catch (error) {
    return res.status(500).json({ result: false, products: null });
  }
});

//http://localhost:3000/api/product/search?name=sp11
router.get("/search", async (req, res, next) => {
  try {
    const { title } = req.query;
    const products = await productController.searchProduct(title);
    return res.status(200).json({ result: true, products });
  } catch (error) {
    return res.status(500).json({ result: false, products: null });
  }
});

//http://localhost:3000/api/products/:id/details
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const products = await productController.getProductById(id);
    return res.status(200).json({ result: true, products });
  } catch (error) {
    return res.status(500).json({ result: false });
  }
});

//http://localhost:3000/api/products/:id/details
router.get("/get_Id_Author/:idAuthor", async (req, res, next) => {
  try {
    const { idAuthor } = req.params;
    console.log(idAuthor);
    const products = await productController.getProductByIdAuthour(idAuthor);
    return res.status(200).json({ result: true, products });
  } catch (error) {
    return res.status(500).json({ result: false });
  }
});

router.post(
  "/upload-images",
  [upload.array("images", 10)],
  async function (req, res, next) {
    try {
      let files = req.files;
      if (files && files.length > 0) {
        let paths = files.map((file) => {
          return `http://192.168.43.220/images/${file.filename}`;
        });
        return res.status(200).json({ result: true, paths });
      }
      return res.status(400).json({ result: false });
    } catch (error) {
      console.log("upload image error: ", error);
      return res.status(500).json({ result: false });
    }
  }
);

router.post(
  "/upload-image",
  [upload.single("image")],
  async function (yeuCau, traLoi, next) {
    try {
      let { file } = yeuCau;
      if (file) {
        let path = `http://192.168.43.220/images/${file.filename}`;
        return traLoi.status(200).json({ result: true, path });
      }

      return res.status(400).json({ result: false });
    } catch (error) {
      console.log("upload image error: ", error);
      return traLoi.status(500).json({ result: false });
    }
  }
);
module.exports = router;
