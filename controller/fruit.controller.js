"use strict";

const superagent = require("superagent");
const dataModel = require("../model/fruitmodel");
const getData = async (req, res) => {
	superagent
		.get(`https://fruit-api-301.herokuapp.com/getFruit`)
		.then((data) => {
			const responseData = data.body.fruits.map((fruit) => {
				return new dataModel(fruit);
			});

			res.send(responseData);
		});
};

module.exports = { getData };
