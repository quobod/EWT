const router = require('express').Router();

/* Landing Views */

// Home View
router.get('/', (req, res) => {
	res.render('landing/index', { title: 'fantasy football' });
});

module.exports = router;