const request = require('request');

const geocode = (address, callback) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(address)}.json?access_token=pk.eyJ1IjoiY2lwaGVybG9yaXMiLCJhIjoiY2sxaWo1N2E1MXFrejNqbXZqZTRhaW1zMiJ9.y0QfASWoy_RlPexa5QE3Ow&limit=1`;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to location services!', undefined);
		} else if (body.features.length === 0) {
			callback('Unable to find location. Try another search.', undefined);
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name
			});
		}
	});
};

module.exports = geocode;