"use strict";

const mongoose = require("mongoose");

const fruitSchema = mongoose.Schema({
	name: String,
	slug: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true,
	},

	image: String,
	price: String,
});

const FruitModel = mongoose.model("Fruits", fruitSchema);

module.exports = { FruitModel };
