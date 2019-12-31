/* Empty JS object to act as endpoint for all routes */
projectData = {};
/* Express to run server and routes */
const express = require('express');
/* Start up an instance of app */
const app = express();
/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
/* Initialize the main project folder*/
app.use(express.static('dist'));
const port = 3001;
/* Spin up the server*/
const server = app.listen(port, listening);

function listening() {
	// console.log(server);
	console.log(`running on localhost: ${port}`);
};
// GET route
app.get('/', function(req, res) {
	res.sendFiles('dist/index.html');
})
app.get('/all2', sendData);

function sendData(req, res) {
	res.send(data);
};
// POST route
app.post('/add', callBack);

function callBack(req, res) {
	res.send('POST received');
}
// POST Zip
const data = [];
app.post('/wheather', addZip);

function addZip(req, res) {
	data.push(req.body);
	//console.log(data);
	mostRecentEntry = {
		//latitude: req.body.latitude,
		//longitude: req.body.longitude,
		//city: req.body.city,
		//country: req.body.country,
		//departingDate: req.body.departingDate,
		//temperature: req.body.temperature,
		//date: req.body.date,
		//userResponse: req.body.userResponse,
	};
	data.push(mostRecentEntry);
	res.send(data);
	console.log(data);
}
app.post("/save", (req, res) => {
	//projectData.longitude = req.body.longitude;
	//projectData.latitude = req.body.latitude;
	//projectData.city = req.body.city;
	//projectData.country = req.body.country;
	//projectData.departingDate = req.body.departingDate;
	//projectData.temp = req.body.temp;
	//projectData.date = req.body.date;
	//projectData.content = req.body.content;
	res.end();
});