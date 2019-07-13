const path = require('path');

// Get root directory absolute path
const rootDirectory = path.parse(__dirname).dir;

module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: `${__dirname}/src/db/sqlite3/lambda.db3`
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			}
		},
		migrations: {
			directory: `${__dirname}/src/db/migrations`,
			tableName: 'dbmigrations'
		},
		seeds: {
			directory: `${__dirname}/src//db/seeds`
		}
	},
	production: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: `${rootDirectory}/sqlite3/lambda.db3`
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			}
		},
		migrations: {
			directory: `${__dirname}/src//db/migrations`,
			tableName: 'dbmigrations'
		},
		seeds: {
			directory: `${__dirname}/src//db/seeds`
		}
	}
};
