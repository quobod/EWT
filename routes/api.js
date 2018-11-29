const router = require('express').Router();
const { cfc } = require('../custom_modules/cfc');
const { log, table } = require('../custom_modules/log');

/*  */

//  Send search term to the API's index view
router.get('/', (req, res) => {
	res.render('api/index', { title: cfc('api route') });
});

//  Send search term to football
router.post('/football', (req, res) => {
	table(req.body);
	res.render('api/index', { title: cfc('football search results') });
});

//  Send search term to basketball
router.post('/basketball', (req, res) => {
	table(req.body);
	res.render('api/index', { title: cfc('basketball search results') });
});

//  Send search term to baseball
router.post('/baseball', (req, res) => {
	table(req.body);
	res.render('api/index', { title: cfc('baseball search results') });
});

//  Send search term to soccer
router.post('/soccer', (req, res) => {
	table(req.body);
	res.render('api/index', { title: cfc('soccer search results') });
});

module.exports = router;