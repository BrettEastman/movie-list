var mysql = require('mysql2');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'moviedb'
});

connection.connect();

module.exports.connection = connection;