var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=e116135d42c6b036ef86e4ae24b2de70';

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = OPEN_WEATHER_MAP_URL + '&q=' + encodedLocation;

		return axios.get(requestUrl).then(function(response){
			if(response.data.cod && response.data.message){
				throw new Error(response.data.message);
			}else{
				return response.data.main.temp;
			}
		}, function(err){
			throw new Error(err.response.data.message);
		});
	}
}
