const express = require("express");
const cookieParser = require("cookie-parser");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");


const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());


const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Allegro WEB Project",
			version: "1.0.0"
		},
		servers: [
			{
				url: "http://localhost:4000/"
			}
		]
	},
	apis: ["./controllers/authController.js"]
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const errorMiddleware = require("./middlewares/errors");

const products = require("./routes/products");
const auth = require("./routes/auth");
const lists = require("./routes/lists");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", lists);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
