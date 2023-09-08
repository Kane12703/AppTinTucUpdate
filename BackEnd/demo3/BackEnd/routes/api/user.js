var express = require("express");
var router = express.Router();

const jwt = require("jsonwebtoken");
const userController = require("../../components/user/Controller");
const { checkRegister } = require("../../middle/Validation");

//http://localhost:3000/api/users/login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userController.login(email, password);
    if (user) {
      //tạo token
      const token = jwt.sign({ user }, "secret", { expiresIn: "1h" });
      const returnData = {
        error: false,
        responseTimestamp: new Date(),
        statusCode: 200,
        data: {
          token: token,
          user: user,
        },
      };
      return res.status(200).json(returnData);
    } else {
      return res.status(400).json({ result: false, user: null });
    }
  } catch (error) {
    return res.status(500).json({ result: false, user: null });
  }
});
//http://localhost:3000/api/users/register
router.post("/register", async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const user = await userController.register(email, password, name);
    if (user) {
      res.status(200).json({ result: true, user });
    } else {
      res.status(400).json({ result: false, user: null });
    }
  } catch (error) {
    res.status(500).json({ result: false, user: null });
  }
});

//http://localhost:3000/api/users/sendmail
router.post("/sendmail", async (req, res, next) => {
  try {
    const { to, subject } = req.body;
    let name = "Truong Dinh Thao";

    const content = `
      <h1>Chào mừng bạn đến với${name}</h1>
      <h2>Chào mừng bạn đã đăng kí thành công </h2>
      `;

    const result = await userController.sendMail(to, subject, content);
    return res.status(200).json({ result });
  } catch (error) {
    console.log("Send mail error:", error);
    return res.status(500).json({ result: false });
  }
});
module.exports = router;
