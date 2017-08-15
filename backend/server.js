const express = require('express');
const path = require('path');
const yelp = require('yelp-fusion');
const api = require('./routes');
const app = express();

app.use(express.static('build'));

app.use('/api', api);

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
})


app.listen(3000, () => {
	console.log('Listening on port 3000 captain!')
});