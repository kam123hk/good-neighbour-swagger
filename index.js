const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const booksRouter = require("./routes/books");

const PORT = process.env.PORT || 4000;


const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Good Neighbour API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:4000",
			},
		],
	},
	apis: ["./routes/*.js"],
};


const specs = swaggerJsDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.json());

app.use("/books", booksRouter);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));