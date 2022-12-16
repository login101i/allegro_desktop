const User = require('../models/User');
const Product = require('../models/Product');
const Cart = require('../models/Cart');

exports.userCart = async (req, res) => {
	// console.log(req.body); // {cart: []}
	const { cart } = req.body;
	let products = [];

	const user = await User.findOne({ email: req.user.email }).exec();


	// check if cart with logged in user id already exist
	let cartExistByThisUser = await Cart.findOne({ orderdBy: user._id }).exec();

	if (cartExistByThisUser) {
		cartExistByThisUser.remove();
		console.log('removed old cart');
	}

	for (let i = 0; i < cart.length; i++) {
		let object = {};

		object.product = cart[i].product._id;
		object.qty = cart[i].qty;
		let productFromDb = await Product.findById(cart[i].product._id).select('price').exec();
		object.price = productFromDb.price;
		object.totalProduct = cart[i].qty * productFromDb.price;
		products.push(object);
	}

	let cartTotal = 0;
	for (let i = 0; i < products.length; i++) {
		cartTotal = cartTotal + products[i].price * products[i].qty;
	}

	let newCart = await new Cart({
		products,
		cartTotal,
		orderedBy: user._id,
	}).save();

	console.log('new cart ----> ', newCart);
	res.json({ ok: true });
};

exports.getUserCart = async (req, res) => {
	const user = await User.findOne({ email: req.user.email }).exec();

	let cart = await Cart.findOne({ orderedBy: user._id }).populate('products.product', '_id title price').exec();

	const { products, cartTotal } = cart;
	res.json({ products, cartTotal });
};
