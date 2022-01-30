const router = require("express").Router();

const {
	registerUser,
	loginUser,
	logout,
	forgotPassword,
	resetPassword,
	getUserProfile,
	updatePassword,
	updateProfile,
	allUsers,
	getUserDetails,
	updateUser,
	deleteUser,
	getStats
} = require("../controllers/authController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

/**
 * @swagger
 * /api/v1/admin/user/:id:
 * 	get:
 *    summary: This api siused
 *     description: description of the
 * 		responses:
 *          200:
 * 		          description: to tesst get methon
 */

router.get(
	"/admin/user/:id",
	isAuthenticatedUser,
	authorizeRoles(),
	getUserDetails
);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.post("/password/forgot", forgotPassword);
router.post("/password/reset/:token", resetPassword);
router.post("/me", isAuthenticatedUser, getUserProfile);
router.put("/password/update", isAuthenticatedUser, updatePassword);
router.put("/me/update", isAuthenticatedUser, updateProfile);
router.get("/admin/users", allUsers);
router.get(
	"/admin/user/:id",
	isAuthenticatedUser,
	authorizeRoles(),
	getUserDetails
);
router.put(
	"/admin/user/:id",
	isAuthenticatedUser,
	authorizeRoles(),
	updateUser
);
router.delete("/admin/user/:id", isAuthenticatedUser, deleteUser);
router.get("/admin/userStats", isAuthenticatedUser, getStats);

module.exports = router;
