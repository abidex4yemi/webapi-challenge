"use strict";

var path = require('path'); // Get root directory absolute path


var rootDirectory = path.parse(__dirname).dir;
console.log(rootDirectory);
module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: "".concat(__dirname, "/db/sqlite3/lambda.db3")
    },
    pool: {
      afterCreate: function afterCreate(conn, done) {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    migrations: {
      directory: "".concat(__dirname, "/db/migrations"),
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: "".concat(__dirname, "/db/seeds")
    }
  },
  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: "".concat(rootDirectory, "/sqlite3/lambda.db3")
    },
    pool: {
      afterCreate: function afterCreate(conn, done) {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    migrations: {
      directory: "".concat(__dirname, "/db/migrations"),
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: "".concat(__dirname, "/db/seeds")
    }
  }
};