var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {});
router.get("/morris", function (req, res, next) {
  res.render("chart/morris");
});
router.get("/plot", function (req, res, next) {
  res.render("chart/plot");
});

module.exports = router;
