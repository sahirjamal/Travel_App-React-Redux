const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');

const token = process.env.YELP_AUTH_TOKEN;

// Get API Token
router.use('/token', (req, res) => {
  const clientId = process.env.YELP_CLIENT_ID;
  const clientSecret= process.env.YELP_CLIENT_SECRET;

  const token = yelp.accessToken(clientId, clientSecret)
  .then(response => {
    console.log(response.jsonBody.access_token);
  }).catch(error => {console.log(error)});
});

// Food Search
router.post('/food', (req, res) => {
  const client = yelp.client(token);
  console.log(req.body);
  res.send('hi');

  // client.search({
  //   term:'Four Barrel Coffee',
  //   location: 'san francisco, ca'
  // }).then(response => {
  //   res.send(response.jsonBody);
  // }).catch(e => {
  //   console.log(e);
  // });
});

// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.json({ success: true });
});

module.exports = router;