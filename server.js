"use strict";
const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { getData } = require("./controller/fruit.controller");
const {
	creatFavFruit,
	getFAvData,
	deleteFavData,
	updateFavData,
} = require("./controller/fruit.crud.conroller");
const app = express();

const PORT = process.env.PORT;
// mongoose.connect("mongodb://localhost:27017/Fruits", {
// 	useNewUrlParser: true,

// 	useUnifiedTopology: true,
// });

mongoose.connect(
	"mongodb+srv://Aa1791994:Aa1791994@cluster0.lgegl.mongodb.net/Books?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,

		useUnifiedTopology: true,
	}
);

app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
	console.log(`server start at port ${process.env.PORT}`);
});

app.get("/fruit", getData);
app.post("/fruit/favourite", creatFavFruit);
app.get("/fruit/favourite", getFAvData);
app.delete("/fruit/favourite/:slug", deleteFavData);
app.put("/fruit/favourite/:slug", updateFavData);
