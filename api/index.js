require('express-group-routes');

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const wheatersController = require('./controller/wheaters');

app.use(cors());
app.use(bodyParser.json());
app.group('/api/v1', (router) => {
	//end point read
	router.get('/wheaters', wheatersController.show);
	router.get('/wheater/:id', wheatersController.detail);
	router.get('/now', wheatersController.showRealTime);
	//end point create
	router.post('/wheater', wheatersController.save);
	//end point update
	router.put('/wheater/:id', wheatersController.update);
	//end point delete
	router.delete('/wheater/:id', wheatersController.delete);
});

app.listen(port, () => console.log(`Listing on port ${port}!`));
