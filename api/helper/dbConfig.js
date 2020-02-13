const mysql = require('mysql');

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'cuaca'
});

db.getConnection(function(err) {
	if (err) throw err;
	console.log('Connected!');
});
module.exports = db;
