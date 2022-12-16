const express = require('express');

const router = express.Router();

// middlewares
const { isAuthenticatedUser } = require('../middlewares/auth.js');
// controllers
const { userCart, getUserCart, emptyCart, saveAddress } = require('../controllers/cartController');

router.post('/user/cart', isAuthenticatedUser, userCart); // save cart
router.get('/user/cart', isAuthenticatedUser, getUserCart); // get cart


module.exports = router;
