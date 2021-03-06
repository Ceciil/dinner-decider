const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { getRestaurants, getOneRestaurant, saveOneRestaurant } = require('./handler.js');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/:search', getRestaurants);

app.get('/api/category/:category', getOneRestaurant);

app.post('/api/restaurant', saveOneRestaurant);

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
