var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const userController = require('../compoments/user/controller');
const productController = require('../compoments/products/controller');
const authentication = require('../middle/authentication');

router.post("/dang-nhap", async function (req, res, next) {
    const { username, password } = req.body;
    // tiến hành đăng nhập
    const user = await userController.login(username, password);
    // await có tác dung là chờ nó chờ nó lấy
    // await thì phải có async
    if (user) {
        //Lưu thông tin vào session
        const token = jwt.sign({ id: user._id, username: user.username }, 'mykey');
        res.json({ status: true, id: user._id, username: user.username, token });
    } else {
        res.json({ status : 404 })
    }
});


router.post("/dang-ky", async function (req, res, next) {
    const { username, password, confirm_password } = req.body;
    // tiến hành đăng nhập
    const user = await userController.register(username, password, confirm_password);
    // await có tác dung là chờ nó chờ nó lấy
    // await thì phải có async
    if (user) {
        res.json({ status : true })
    } else {
        res.json({ status : false })
    }
});

router.get("/san-pham", async function (req, res, next) {
    const products = await productController.getProducts();
    res.json(products);
  });

  router.get("/san-pham/:id/detail", async function (req, res, next) {
    const { id } = req.params;
    const product = await productController.getProductById(id);
    res.json(product);
});






module.exports = router;