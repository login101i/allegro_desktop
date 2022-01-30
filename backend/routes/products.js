const router = require("express").Router();

const {
	getProducts,
	createProduct,
	getSingleProduct,
	updateProduct,
	deleteProduct
} = require("../controllers/productController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.get("/products", getProducts);
router.post("/product/new"  , createProduct);
router.get("/product/:id", getSingleProduct);
router.put(
	"/admin/product/:id",
	isAuthenticatedUser,
	authorizeRoles(),
	updateProduct
);
router.delete(
	"/admin/product/:id",

	deleteProduct
);
// router.get("/admin/randomMovie", isAuthenticatedUser, randomMovie);

module.exports = router;
