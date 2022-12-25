const Product = require('../models/Product');
const shuffleArray = require('../utils/shuffleArray');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures = require('../utils/apiFeatures');
const cloudinary = require('cloudinary');

exports.getProducts = catchAsyncErrors(async (req, res, next) => {
	const productsCount = await Product.countDocuments();
	const resPerPage = 16;

	const apiFeatures = new APIFeatures(Product.find(), req.query).search().filter().pagination(resPerPage);

	let productsInDbOrder = await apiFeatures.query;
	let filteredProductsCount = productsInDbOrder.length;
	const products = shuffleArray(productsInDbOrder);

	res.status(200).json({
		success: true,
		productsCount,
		filteredProductsCount,
		message: 'This is all products from DB',
		products,
		resPerPage,
	});
});

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
	let images = [];
	if (typeof req.body.img === 'string') {
		images.push(req.body.img);
	} else {
		images = req.body.img;
	}
	let imagesLinks = [];

	for (let i = 0; i < images.length; i++) {
		const result = await cloudinary.v2.uploader.upload(images[i].url, {
			folder: 'allegroWebProducts',
		});
		imagesLinks.push({
			public_id: result.public_id,
			url: result.secure_url,
		});
	}

	req.body.img = imagesLinks;
	// req.body.user = req.user.id;

	const newProduct = await Product.create(req.body);
	if (!newProduct) {
		return next(new ErrorHandler('Nie stworzono produktu', 404));
	}
	res.status(201).json({
		success: true,
		message: 'product created',
		product: newProduct,
	});
});

// Get single product details   =>   /api/v1/products/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		return next(new ErrorHandler('Brak produktu o takim id', 404));
	}

	res.status(200).json({
		success: true,
		product,
	});
});

// Update product   =>   /api/v1/admin/product/:id
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
	let product = await Product.findById(req.params.id);

	// if (!product) {
	//   res.status(404).json({
	//     success: false,
	//     message: "Brak filmu o takim id.",
	//   });
	// }
	if (!product) {
		return next(new ErrorHandler('Product not found', 404));
	}

	product = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	res.status(200).json({
		success: true,
		message: 'Uaktualniono Product',
		product,
	});
});

// Delete product   =>   /api/v1/admin/product/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		return next(new ErrorHandler('Product not found', 404));
	}

	await product.remove();

	res.status(200).json({
		success: true,
		message: 'Product is deleted.',
	});
});

exports.randomProduct = catchAsyncErrors(async (req, res) => {
	const type = req.query.type;
	let product;
	try {
		if (type === 'series') {
			product = await product.aggregate([{ $match: { isSeries: true } }, { $sample: { size: 1 } }]);
		} else {
			product = await product.aggregate([{ $match: { isSeries: false } }, { $sample: { size: 1 } }]);
		}
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json(err);
	}
});
