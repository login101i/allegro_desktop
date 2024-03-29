const User = require('../models/User');
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const stripe = require('stripe')('stripe_secret_key');

exports.createPaymentIntent = async (req, res) => {
	// later apply coupon
	// later calculate price

	const user = await User.findOne({ email: req.user.email }).exec();
	console.log(user);

	const { cartTotal } = await Cart.findOne({ orderedBy: user._id }).exec();
	console.log(cartTotal);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: cartTotal * 100,
		currency: 'PLN',
	});

	res.send({
		clientSecret: paymentIntent.client_secret,
	});
};
