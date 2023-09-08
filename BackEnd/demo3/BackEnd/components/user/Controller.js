const mailer = require("nodemailer");
const userService = require("./Service");

const login = async (email, password) => {
  try {
    return userService.login(email, password);
  } catch (error) {
    console.log("User controller login error: ", error);
  }
};

const register = async (email, password, name) => {
  try {
    return await userService.register(email, password, name);
  } catch (error) {
    console.log("User controller register error: ", error);
  }
};

const transporter = mailer.createTransport({
  pool: true,
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: "truongdinhthao12@gmail.com",
    pass: "rgdlcpwunhiycinv",
  },
});
const sendMail = async (to, subject, content) => {
  try {
    const mailOptions = {
      from: "Thao <truongdinhthao12@gmail.com>",
      to,
      subject,
      html: content,
    };
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.log("User controller sendMail erorr: ", error);
  }
  return false;
};
module.exports = { login, register, sendMail };
