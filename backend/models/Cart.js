const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const CartSchema = new mongoose.Schema(
	{
		products: [
			{
				product: {
					type: ObjectId,
					ref: 'Product',
				},
				qty: Number,
				price: Number,
        totalProduct:Number
			},
		],
		cartTotal: Number,
		orderedBy: { type: ObjectId, ref: 'User' },
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Cart', CartSchema);
