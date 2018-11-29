const router = require('express').Router();

/* Landing Views */

// Home View
router.get('/', (req, res) => {
	res.render('landing/index', { title: 'fantasy football' });
});

// About View
router.get('/about', (req, res) => {
	res.render('landing/about', { title: 'about us', subtitle: 'Fantasy Sports Data' });
});

module.exports = router;