require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const { log, table } = require('./custom_modules/log');

// App Constants
const PORT = process.env.PORT || 5000;
const ADDRESS = process.env.ADDRESS || '0.0.0.0';
const APPNAME = process.env.APP_NAME || 'FFA';

// Handlebars Helpers
const {
	truncate,
	stripTags,
	formatDate,
	select,
	cfc
} = require('./helpers/hbs');

// App Routers
const index = require('./routes/index');

const app = express();
 
// View Engine Setup
app.engine('hbs', expressHbs({	
	helpers: {
		truncate: truncate,
		stripTags: stripTags,
		formatDate: formatDate,
		select: select,
		cfc: cfc
	},
	defaultLayout: 'layout'}));
app.set('view engine', 'hbs');

// Config Body Parser Middleware; parse application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Set Views Path
app.set('views', path.join(__dirname, 'views'));

// Set Static Resources Path
app.use(express.static(path.join(__dirname, 'public')));


// Config App Constants
app.set('port', PORT);
app.set('address', ADDRESS);
app.set('name', APPNAME);

// Config App Routers
app.use('/', index);

// Start App Server
app.listen(PORT, ADDRESS, () => {
	table({ Server: `${app.get('name')}`, Address: `${app.get('address')}`, Port: `${app.get('port')}`, Status: 'Running' });
});