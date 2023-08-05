const express = require('express');
const { Op } = require('sequelize');
const asyncHandler = require('express-async-handler');
const { Restaurant } = require('../../db/models');

const router = express.Router();

// Live Search
router.put(
	'/',
	asyncHandler(async (req, res) => {
		const { searchInput, locationObj } = req.body;
		console.log(locationObj)
		const location = locationObj.location
		console.log(location)
		if (location !== undefined) {
			const localArr = location.replace(',', '').split(' ');

			const searchObjLocation = {
				where: {
					name: { [Op.iLike]: `%${searchInput}%` },
					location: { [Op.contains]: localArr },
				},
				limit: 5,
			};

			try {
					const restaurants = await Restaurant.findAll(searchObjLocation);

					res.json(restaurants);
			} catch (err) {
				console.log(err);
			}
		}
	})
);

module.exports = router;
