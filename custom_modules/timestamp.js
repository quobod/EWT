const moment = require('moment');

const stamp = (date = Date.now(), format = 'MMMM Do YYYY') => {
	return moment(date).format(format);
};

module.exports = {
	timeStamp: (d = Date.now(), f = 'MMMM Do YYYY') => {
		return stamp(d, f);
	}
};