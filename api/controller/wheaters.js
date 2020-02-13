const db = require('../helper/dbConfig');

exports.show = async (req, res) => {
	let sql = 'Select * from dataCuaca';
	let query = await db.query(sql, (err, results) => {
		if (err) {
			throw err;
		} else if (results.length < 1) {
			res.send(JSON.stringify({ status: 204, error: 'data not found', response: results }));
		} else {
			res.send(JSON.stringify({ status: 200, error: null, response: results }));
		}
	});
};

exports.detail = async (req, res) => {
	let sql = 'SELECT * FROM dataCuaca WHERE id=' + req.params.id;
	let query = await db.query(sql, (err, results) => {
		if (err) {
			throw err;
		} else if (results.length < 1) {
			res.send(JSON.stringify({ status: 204, error: 'data not found', response: results }));
		} else {
			res.send(JSON.stringify({ status: 200, error: null, response: results }));
		}
	});
};

exports.save = async (req, res) => {
	console.log(req.body.date);
	let data = {
		date: req.body.date,
		time: req.body.time,
		temp: req.body.temp,
		ph: req.body.ph,
		moisture: req.body.moisture,
		conditions: req.body.conditions
	};
	let sql = 'INSERT INTO dataCuaca SET ?';
	let query = await db.query(sql, data, (err, results) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: 'insert data successfull' }));
	});
};

exports.showRealTime = async (req, res) => {
	let sql = `SELECT * FROM dataCuaca WHERE date='2019-11-26'  and time between current_time()-interval 3 hour and current_time+interval 3 hour`;
	let query = await db.query(sql, (err, results) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: results }));
	});
};

exports.delete = async (req, res) => {
	const id = req.params.id;
	let sql = 'delete from dataCuaca where id=' + req.params.id;
	let query = await db.query(sql, (err, results) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: 'delete successfull' }));
	});
};

exports.update = async (req, res) => {
	const id = req.params.id;
	let data = {
		date: req.body.date,
		time: req.body.time,
		temp: req.body.temp,
		ph: req.body.ph,
		moisture: req.body.moisture,
		conditions: req.body.conditions
	};
	let sql = 'update dataCuaca set ? where id=' + id;
	let query = await db.query(sql, data, (err, results) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: results }));
	});
};
