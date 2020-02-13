const db = require('./dbConfig');
db.getConnection(function(err) {
	if (err) {
		return console.error('error: ' + err.message);
	}

	let createDataCuaca = `create table if not exists dataCuaca(
                          id int primary key auto_increment,
                          date date not null,
                          time time not null,
                          temp varchar(255)not null,
                          ph varchar(255)not null,
                          moisture varchar(255)not null,
                          conditions varchar(255)not null
                      )`;

	db.query(createDataCuaca, function(err, results, fields) {
		if (err) {
			console.log(err.message);
		} else {
			console.log('table created');
		}
	});
	let sql =
		"INSERT INTO dataCuaca (date, time, temp, ph, moisture, conditions) VALUES ('2019-11-26', '01:00:00','20','5.0','43','cerah'),('2019-11-26', '04:00:00','20','5.1','42','cerah'),('2019-11-26', '07:00:00','24','5.2','41','cerah'),('2019-11-26', '10:00:00','27','5.2','40','berawan'),('2019-11-26', '13:00:00','28','5.2','38','berawan'),('2019-11-26', '16:00:00','24','5.3','38','berawan'),('2019-11-26', '19:00:00','22','5.2','40','hujan'),('2019-11-26', '22:00:00','22','5.4','40','hujan'),('2019-11-27', '01:00:00','22','5.5','43','hujan'),('2019-11-27', '04:00:00','22','5.7','42','hujan'),('2019-11-27', '07:00:00','26','5.9','41','berawan'),('2019-11-27', '10:00:00','27','6.0','40','berawan'),('2019-11-27', '13:00:00','29','6.0','38','cerah'),('2019-11-27', '16:00:00','22','6.0','38','cerah'),('2019-11-27', '19:00:00','20','6.1','40','berawan'),('2019-11-27', '22:00:00','20','6.1','40','berawan')";

	db.query(sql, function(err, results, fields) {
		if (err) {
			console.log(err.message);
		} else {
			console.log('insert table succsess');
		}
	});
});
