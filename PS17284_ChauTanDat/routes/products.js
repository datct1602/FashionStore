var express = require('express');
var router = express.Router();

const productController = require("../compoments/products/controller");
const categoryController = require("../compoments/categories/controller");

const upload = require("../middle/upload");
const authentication = require('../middle/authentication');

 router.get("/", [authentication.checkLogin], async function (req, res, next) {
  const data = await productController.getProducts();

  res.render("products", { products: data });
});

 router.post("/", [upload.single('image')], async function (req, res, next) {
  let {body , file } = req;
  let image = '';
  if (file){
    image = `http://10.82.148.62:3000/images/${file.filename}`
  }
  body = {...body,image}
  await productController.insert(body);
  res.redirect("/san-pham");
});

router.get("/them-moi", [authentication.checkLogin], async function (req, res, next) {
  const categories = await categoryController.getCategories();
  res.render("product_insert", { categories: categories });
});

router.get("/:id/edit", async function (req, res, next) {
  const { id } = req.params;
  const product = await productController.getProductById(id);
  const categories = await categoryController.getCategoriesSelected(product.category_id._id);
  console.log('category = ', categories);
  res.render("product_edit", { product: product, categories: categories });
});

 router.post("/:id/edit", [upload.single('image')], async function (req, res, next) {
  
  let {body , file, params } = req;
  delete body.image;
  if (file){
    let image = `http://10.82.148.62:3000/images/${file.filename}`
    body = {...body,image}
  }
  console.log('body = ' , body);
  await productController.update(params.id, body);

  res.redirect('/san-pham');
});

router.delete("/:id/delete", async function (req, res, next) {
  const{id} = req.params;
  await productController.delete(id);
  res.json({result: true});
  
});

router.get("/thong-ke", function (req, res, next) {
  res.render("products", {});
});

module.exports = router;
