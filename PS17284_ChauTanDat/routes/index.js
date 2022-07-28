/**
 * router: giống như là ngươi điều hướng , quyết dịnh cái gì sẽ diễn ra tiếp theo
 */
var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const authentication = require('../middle/authentication');

const userController = require("../compoments/user/controller");

/**
 * http://localhost:3000/dang-nhap
 * method: get
 * desc: hiển thị trang đăng nhập
 */
router.get("/dang-nhap", [authentication.checkLogin], function (req, res, next) {
  res.render("login");
});

/**
 * http://localhost:3000/dang-nhap
 * method: post
 * desc: tiến hành đăng nhập
 */
router.post("/dang-nhap", async function (req, res, next) {
  const { username, password } = req.body;
  // tiến hành đăng nhập
  const user = await userController.login(username, password);
  // await có tác dung là chờ nó chờ nó lấy
  // await thì phải có async
  if (user) {
    //Lưu thông tin vào session
    const token = jwt.sign({ id: user._id, username: user.username }, 'mykey');
    req.session.token = token;
    // nếu thành công thì chuyển qua sản phẩm
    res.redirect("/san-pham");
  } else {
    // nếu không thành công
    res.redirect("/dang-nhap");
  }
});

router.get('/dang-xuat', [authentication.checkLogin], function (req, res, next) {

  req.session.destroy(function (err) {
    res.redirect('/dang-nhap');
  })

});

module.exports = router;
