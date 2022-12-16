const express = require('express');
const cookieParser = require('cookie-parser');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

// const options = {
// 	definition: {
// 		openapi: "3.0.0",
// 		info: {
// 			title: "Allegro WEB Project",
// 			version: "1.0.0"
// 		},
// 		servers: [
// 			{
// 				url: "http://localhost:4000/"
// 			}
// 		]
// 	},
// 	apis: ["./controllers/authController.js"]
// };

// const swaggerSpec = swaggerJSDoc(options);
// app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const errorMiddleware = require('./middlewares/errors');

const products = require('./routes/products');
const auth = require('./routes/auth');
const lists = require('./routes/lists');
const cart = require('./routes/cart')
const stripe = require('./routes/stripe');

app.use('/api/v1', products);
app.use('/api/v1', auth);
app.use('/api/v1', lists);
app.use('/api/v1', cart);
app.use('/api/v1', stripe);

if (process.env.NODE_ENV === 'PRODUCTION') dotenv.config({ path: 'backend/config/config.env' });

console.log(__dirname);

if (process.env.NODE_ENV === 'PRODUCTION') {
	app.use(express.static(path.join(__dirname, '../frontend/build')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	});
}

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
