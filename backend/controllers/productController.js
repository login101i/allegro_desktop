const Product = require("../models/Product");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");
const cloudinary = require("cloudinary");

exports.getProducts = catchAsyncErrors(async (req, res, next) => {
	const productsCount = await Product.countDocuments();
	const resPerPage = 8;

	const apiFeatures = new APIFeatures(Product.find(), req.query)
		.search()
		.filter()
		.pagination(resPerPage);

	let products = await apiFeatures.query;
	let filteredProductsCount = products.length;

	res.status(200).json({
		success: true,
		productsCount,
		filteredProductsCount,
		message: "This is all products from DB",
		products,
		resPerPage
	});
});

exports.createProduct = catchAsyncErrors(async (req, res, next) => {

	let images = [];

	if (typeof req.body.img === "string") {
		images.push(req.body.img);
	} else {
		images = req.body.img;
	}
	console.log(typeof images[0].url);

	let imagesLinks = [];

	for (let i = 0; i < images.length; i++) {
		const result = await cloudinary.v2.uploader.upload(images[i].url, {
			folder: "allegroWebProducts"
		});

		imagesLinks.push({
			public_id: result.public_id,
			url: result.secure_url
		});
	}

	req.body.img = imagesLinks;
	// req.body.user = req.user.id;

	const newProduct = await Product.create(req.body);

	res.status(201).json({
		success: true,
		message: "product created",
		product: newProduct
	});
});

// Get single movie details   =>   /api/v1/movies/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
	const product = await Product.findById(req.params.id);
	// console.log(product);
	// if (!product) {
	// 	res.status(500).json({
	// 		message: "Brak produktu o takim id."
	// 	});
	// }
	if (!product) {
		return next(new ErrorHandler("Brak produktu o takim id", 404));
	}

	res.status(200).json({
		success: true,
		product
	});
});

// Update Movie   =>   /api/v1/admin/movie/:id
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
	let product = await Product.findById(req.params.id);

	// if (!movie) {
	//   res.status(404).json({
	//     success: false,
	//     message: "Brak filmu o takim id.",
	//   });
	// }
	if (!product) {
		return next(new ErrorHandler("Product not found", 404));
	}

	product = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
		useFindAndModify: false
	});

	res.status(200).json({
		success: true,
		message: "Uaktualniono Product",
		movie
	});
});

// Delete Movie   =>   /api/v1/admin/movie/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
	const product = await Product.findById(req.params.id);

	if (!product) {
		return next(new ErrorHandler("Product not found", 404));
	}

	await product.remove();

	res.status(200).json({
		success: true,
		message: "Product is deleted."
	});
});

exports.randomProduct = catchAsyncErrors(async (req, res) => {
	const type = req.query.type;
	let movie;
	try {
		if (type === "series") {
			movie = await Movie.aggregate([
				{ $match: { isSeries: true } },
				{ $sample: { size: 1 } }
			]);
		} else {
			movie = await Movie.aggregate([
				{ $match: { isSeries: false } },
				{ $sample: { size: 1 } }
			]);
		}
		res.status(200).json(movie);
	} catch (err) {
		res.status(500).json(err);
	}
});
