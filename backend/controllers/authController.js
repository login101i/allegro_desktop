const User = require('../models/User');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
	const { name, email, password } = req.body;
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	if (!email.match(emailFormat)) {
		return next(new ErrorHandler('Nieprawidłowy format email', 400));
	}

	const userExist = await User.findOne({ email });
	if (userExist) {
		return next(new ErrorHandler('Taki użytkownik już istnieje', 400));
	}

	const user = await User.create({
		name,
		email,
		password: hashedPassword,
		avatar:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZtlkHFL5gQf7hDz5ZnkBlWT9H0ETbkWCGKb2ijSZHrvq5CBGoVrajFDfc3dPHv8EQfA&usqp=CAU',
	});

	sendToken(user, 201, res);
});

// api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
	const { email, password } = req.body;

	// Checks if email and password is entered by user
	if (!email || !password) {
		return next(new ErrorHandler('Please enter email & password', 400));
	}

	// Finding user in database
	const user = await User.findOne({ email }).select('+password');

	if (!user) {
		return next(new ErrorHandler('Nieprawidłowy email', 401));
	}

	// Checks if password is correct or not
	const validPassword = await bcrypt.compare(password, user.password);
	if (!validPassword) {
		return next(new ErrorHandler('Nieprawidłowe hasło', 401));
	}
	sendToken(user, 200, res);
});

// Logout user   =>   /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
	const options = {
		expires: new Date(Date.now()),
		httpOnly: true,
	};

	res.status(200).cookie('token', null, options).json({
		success: true,
		message: 'Logged out',
		user: null,
	});
});

// Forgot Password   =>  /api/v1/password/forgot
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email });

	if (!user) {
		return next(new ErrorHandler('User not found with this email', 404));
	}

	// Get reset token
	const resetToken = user.getResetPasswordToken();

	await user.save({ validateBeforeSave: false });

	// Create reset password url
	const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;

	const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`;

	try {
		await sendEmail({
			email: user.email,
			subject: 'ShopIT Password Recovery',
			message,
		});

		res.status(200).json({
			success: true,
			message: `Email sent to: ${user.email}`,
		});
	} catch (error) {
		user.resetPasswordToken = undefined;
		user.resetPasswordExpire = undefined;

		await user.save({ validateBeforeSave: false });

		return next(new ErrorHandler(error.message, 500));
	}
});

// Reset Password   =>  /api/v1/password/reset/:token
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
	// Hash URL token
	const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

	const user = await User.findOne({
		resetPasswordToken,
		resetPasswordExpire: { $gt: Date.now() },
	});

	if (!user) {
		return next(new ErrorHandler('Password reset token is invalid or has been expired', 400));
	}

	if (req.body.password !== req.body.confirmPassword) {
		return next(new ErrorHandler('Password does not match', 400));
	}

	// Setup new password
	user.password = req.body.password;

	user.resetPasswordToken = undefined;
	user.resetPasswordExpire = undefined;

	await user.save();

	sendToken(user, 200, res);
});

// Get currently logged in user details   =>   /api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.user._id);

	res.status(200).json({
		success: true,
		user,
	});
});

// Update / Change password   =>  /api/v1/password/update
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.user.id).select('+password');

	// Check previous user password
	const isMatched = await user.comparePassword(req.body.oldPassword);
	if (!isMatched) {
		return next(new ErrorHandler('Old password is incorrect', 400));
	}

	user.password = req.body.password;
	await user.save();

	sendToken(user, 200, res);
});

// Update user profile   =>   /api/v1/me/update
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
	const newUserData = {
		name: req.body.name,
		email: req.body.email,
	};

	// Update avatar
	// something

	const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	res.status(200).json({
		success: true,
		message: 'User updated successfully',
	});
});

// Get all users   =>   /api/v1/admin/users
exports.allUsers = catchAsyncErrors(async (req, res, next) => {
	// limit to 10 newest Users
	const query = req.query.new;

	const users = query ? await User.find().sort({ _id: -1 }).limit(3) : await User.find();
	const numberOfUsers = users.length;

	res.status(200).json({
		success: true,
		message: 'all users below: ',
		numberOfUsers,
		users,
	});
});

// Get user details   =>   /api/v1/admin/user/:id
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.params.id);

	if (!user) {
		return next(new ErrorHandler(`User does not found with id: ${req.params.id}`));
	}

	res.status(200).json({
		success: true,
		user,
	});
});

// Update user profile   =>   /api/v1/admin/user/:id
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
	const newUserData = {
		name: req.body.name,
		email: req.body.email,
		role: req.body.role,
	};

	const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
		new: true,
		runValidators: true,
		useFindAndModify: false,
	});

	res.status(200).json({
		success: true,
	});
});

// Delete user   =>   /api/v1/admin/user/:id
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.params.id);

	if (!user) {
		return next(new ErrorHandler(`User does not found with id: ${req.params.id}`));
	}

	await user.remove();

	res.status(200).json({
		success: true,
		message: 'Użytkownik został usunięty.',
	});
});

//GET USER STATS
exports.getStats = catchAsyncErrors(async (req, res, next) => {
	const today = new Date();
	const latYear = today.setFullYear(today.setFullYear() - 1);

	try {
		const data = await User.aggregate([
			{
				$project: {
					month: { $month: '$createdAt' },
				},
			},
			{
				$group: {
					_id: '$month',
					total: { $sum: 1 },
				},
			},
		]);
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});
