const express = require("express");
var router = express.Router();
const userController = require("../components/user/Controller");
const {authenWeb}=require('../middle/Authen')
const jwt=require('jsonwebtoken');

/* GET home page. */
router.get("/", [authenWeb],async (req, res, next) => {
  res.render("index", { title: "Express" });
});
//hiển thị trang login
router.get("/login",[authenWeb], async (req, res, next) => {
  res.render("user/login");
});

router.get("/register", async (req, res, next) => {
  res.render("user/register");
});
//xử lí login
//kiểm tra email,password
//thành công,chuyển sang trang chủ
//ngược lại chuyển sang trang login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await userController.login(email, password);
    if (result) {
      //khi login thành công 
      //tạo token ,lưu token ,session
      const token=jwt.sign({_id:result._id,role:result.role},'secret',{expiresIn:'1h'});
      req.session.token=token;  
      return res.redirect("/");
    } else {
      return res.redirect("/login");
    }
  } catch (error) {
    console.log("Login error: ", error);
    return res.redirect("/login");
  }
});

router.get("/logout",async (req, res, next) => {
  try {
    req.session.destroy();
    return res.redirect('/login');
  } catch (error) {
    console.log('logout error: ',error);
    return res.redirect('/login');
  }
});

module.exports = router;
