const axios = require('axios');

const url =
	'https://raw.githubusercontent.com/laputacr0sx/dataStorage/main/allDutyArray.js';

const response = await axios.get(url);

const result = response.data;

let arr = JSON.parse(result);
