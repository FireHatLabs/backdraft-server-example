var config	= require('./settings')
		, api	= require('backdraft')(config);

var item = require('./responders/item')(api);

api.log('Open for business');
