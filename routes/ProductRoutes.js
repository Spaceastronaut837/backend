const router=require("express").Router();
const productController=require("../controllers/ProductController")

router.post("/product",productController.addProducts)
router.get("/products",productController.getProducts)
router.get("/productsByCategory",productController.getProductsByCategory)

module.exports=router