const app = require('./app');
const dotenv = require('dotenv');
var colors = require('colors');
const cloudinary = require('cloudinary');

const connectDataBase = require('./config/connectDataBase');


// Handle Uncaught exceptions
process.on('uncaughtException', err => {
	console.log(`ERROR: ${err.stack}`);
	console.log('Shutting down due to uncaught exception for example console.log(x) where x is not defined.'.yellow.underline);
	process.exit(1);
});

connectDataBase();

// Setting up cloudinary configuration
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});


const server = app.listen(process.env.PORT || 4001, () => {
	console.log(`Serwer działa na porcie ${process.env.PORT} w procesie ${process.env.NODE_ENV}`.brightMagenta);
});

// Handle Unhandled Promise rejections np gdy w .env mamy błędny adres
process.on('unhandledRejection', err => {
	console.log(`ERROR: ${err.message}`);
	console.log('Shutting down the server due to Unhandled Promise rejection'.red);
	server.close(() => {
		process.exit(1);
	});
});
