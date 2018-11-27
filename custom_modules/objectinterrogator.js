module.exports = {
	objKeys: (obj) => Object.keys(obj),
	objEntries: (obj) => Object.entries(obj),
	keyCount: (obj) => parseInt(Object.entries(obj).length) || 0
};