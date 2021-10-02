"use strict";

const { FruitModel } = require("../model/fruitScheam");

const creatFavFruit = async (req, res) => {
	const { name, image, price } = req.body;
	const slug = name.toLowerCase().split(" ").join("-");

	FruitModel.find({ slug: slug }, (error, data) => {
		if (data.length > 0) {
			res.send("sorry");
		} else {
			const newFruitModel = new FruitModel({
				name: name,
				slug: slug,
				image: image,
				price: price,
			});

			newFruitModel.save();
			res.send(newFruitModel);
		}
	});
};

const getFAvData = async (req, res) => {
	let data = await FruitModel.find({});
	res.send(data);
};

const deleteFavData = (req, res) => {
	const slug = req.params.slug;

	FruitModel.deleteOne({ slug: slug }, async (error, data) => {
		if (error) {
			res.send(error);
		} else {
			let data = await FruitModel.find({});
			res.send(data);
		}
	});
};

const updateFavData = async (req, res) => {
	const slug = req.params.slug;
	const updateData = req.body;
	FruitModel.findOne({ slug: slug }, (error, data) => {
		data.name = updateData.name;
		// data.image=updateData.image
		data.price = updateData.price;
		data.save();
	});

	let data = await FruitModel.find({});
	res.send(data);
};
module.exports = { creatFavFruit, getFAvData, deleteFavData, updateFavData };
