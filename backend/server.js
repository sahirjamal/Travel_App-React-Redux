const express = require('express');
const app = express();

app.use(express.static('build'));

// Get access token which is valid for 180 days

// const clientId = process.env.YELP_CLIENT_ID;
// const clientSecret= process.env.YELP_CLIENT_SECRET;
// console.log(clientId);
// console.log(clientSecret);

// const token = yelp.accessToken(clientId, clientSecret)
// .then(response => {
//   const auth_token = response.body.access_token;
//   console.log(response);
// }).catch(error => {console.log(error)});

// Search the Yelp API
// const client = yelp.client(token);

// client.search({
//   term: 'Four Barrel Coffee',
//   location: 'San Francisco, CA'
// }).then(response => {console.log(response)})
// .catch(error => {console.log(error)});

app.listen(3000, () => {
	console.log('Server for React Todo App listening on port 3000!')
});