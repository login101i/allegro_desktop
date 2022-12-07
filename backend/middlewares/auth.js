const User = require('../models/User');
const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('./catchAsyncErrors');

// Checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
	const { token } = req.cookies;

	if (!token) {
		return next(new ErrorHandler('Najpierw zaloguj się aby uzyskać dostęp do danych.', 401));
	}

	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	req.user = await User.findById(decoded.id);

	next();
});

// // Handling users roles
exports.authorizeRoles = () => {
	return (req, res, next) => {
		if (!req.user.isAdmin) {
			return next(new ErrorHandler(`Nie jestes upoważniony do wglądu tych plików`, 403));
		}
		next();
	};
};
