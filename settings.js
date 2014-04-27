var path				= require('path')
		, rootPath	= path.normalize(__dirname + '/../..')
		, config		= {};

config.server = {
		mode: 'development',
		port: '8100',
		host: '127.0.0.1',
		protocol: 'http',
		sessionSecret: 'backdraft 1234',
		hashSalt: 'backdraft 4567',
		dbSalt: 'backdraft 7890'
	};

config.app = {
		lang: 'en',
		name: 'backdraft',
		path: '/',
		logo: '',
		uri: config.server.protocol + '://' + config.server.host + ':' + config.server.port
	};

config.database_auth = {
		name: config.app.name,
		host: 'localhost',
		port: '27017',
		user: '',
		pass: ''
	};

config.database = {
		name: config.app.name,
		host: 'localhost',
		port: '27017',
		user: '',
		pass: ''
	};

config.logs = {
		prefix: config.app.name,
		consoleLevel: 'debug',
		levels: [
			{
				name: 'debug',
				enabled: true,
				filePath: './log'
			},
			{
				name: 'info',
				enabled: true,
				filePath: './log'
			},
			{
				name: 'error',
				enabled: true,
				filePath: './log'
			},
			{
				name: 'security',
				enabled: true,
				filePath: './log'
			},
			{
				name: 'exception',
				enabled: true,
				filePath: './log'
			},
			{
				name: 'audit',
				enabled: true,
				filePath: './log'
			}
		]
	};

module.exports = config;
