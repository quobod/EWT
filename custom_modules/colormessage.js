const chalk = require('chalk');
const { cfc } = require('./cfc');

const error = (arg = '') => {
	return (chalk.rgb(134, 100, 100).bold('\n' + cfc(`${arg}`)));
};

const warning = (arg = '') => {
	return (chalk.rgb(134, 134, 100).bold('\n' + cfc(`${arg}`)));
};

const success = (arg = '') => {
	return (chalk.rgb(100, 134, 100).bold('\n' + cfc(`${arg}`)));
};

const failure = (arg = '') => {
	return (chalk.rgb(117, 130, 130).bold('\n' + cfc(`${arg}`)));
};

const information = (arg = '') => {
	return (chalk.rgb(100,128,254).bold('\n' + cfc(`${arg}`)));
};

const fyi = (arg = '') => {
	return chalk.rgb(18,128,254).bold(`${cfc(arg)}`);
};

module.exports = {
	error: (arg)=>error(arg),
	warning: (arg)=>warning(arg),
	success: (arg)=>success(arg),
	failure: (arg)=>failure(arg),
	info: (arg)=>information(arg),
	fyi: (arg)=>fyi(arg)
};