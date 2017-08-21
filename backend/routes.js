const express = require('express');
const yelp = require('yelp-fusion');
const token = process.env.YELP_AUTH_TOKEN;
const router = express.Router();
const _ = require('underscore');

// let foodPromises;
// let drinkPromises;
// let artPromises;
// let attractionPromises;
// let nightlifePromises;
// let allPromises;
let state;
let yelpResponse;


const clientId = process.env.YELP_CLIENT_ID;
const clientSecret= process.env.YELP_CLIENT_SECRET;
var yelpToken='q5koOf8KoIcJMZZZin-eTYo2xvbQ88Jc70F32zOl9VP-tGWzqeY7O6ktTbA_N_gEd0uz0qfAJ4Ftl43cVIKKByg1YgVGPA5XAXSPhn01RTmi6ssszZkQlTJ7hG6SWXYx';

// Get API Token
router.use('/token', (req, res) => {

  const token = yelp.accessToken(clientId, clientSecret)
  .then(response => {
    console.log(response.jsonBody.access_token);
  }).catch(error => {console.log(error)});
});

// Search Results

router.post('/results', async (req, res) => {
  yelpResponse = {
    foods:'',
    drinks:'',
    arts:'',
    attractions:'',
    nightlife:''
  }

  const client = yelp.client(yelpToken);
  if (req.body.state) {
    state = req.body.state;
}

 let foodPromises = [];
 let drinkPromises = [];
 let artPromises = [];
 let attractionPromises = [];
 let nightlifePromises = [];

if (state.searchReducer.foods.length > 0) {
  state.searchReducer.foods.forEach((term) => {
    foodPromises.push(client.search({
      term: term,
      location: state.locationReducer.location || 'San Francisco, CA',
      radius: 1000,
      open_now: true
    }));
  });
}

if (state.searchReducer.drinks.length > 0) {
  state.searchReducer.drinks.forEach((term) => {
    drinkPromises.push(client.search({
      term: term,
      location: state.locationReducer.location || 'San Francisco, CA',
      radius: 1000,
      open_now: true
    }));
  });
}

if (state.searchReducer.attractions.length > 0) {
  state.searchReducer.attractions.forEach((term) => {
    attractionPromises.push(client.search({
      term: term,
      location: state.locationReducer.location || 'San Francisco, CA',
      radius: 1000,
      open_now: true
    }));
  });
}

if (state.searchReducer.arts.length > 0) {
  state.searchReducer.arts.forEach((term) => {
    artPromises.push(client.search({
      term: term,
      location: state.locationReducer.location || 'San Francisco, CA',
      radius: 1000,
      open_now: true
    }));
  });
}

if (state.searchReducer.nightlife.length > 0) {
  state.searchReducer.nightlife.forEach((term) => {
    nightlifePromises.push(client.search({
      term: term,
      location: state.locationReducer.location || 'San Francisco, CA',
      radius: 1000,
      open_now: true
    }));
  });
}

console.log("this is your state", state);

const allPromises = [
  Promise.all(foodPromises)
  .then((response) => {
    yelpResponse.foods = response;
  }),

  Promise.all(drinkPromises)
  .then((response) => {
    yelpResponse.drinks = response;
  }),

  Promise.all(attractionPromises)
  .then((response) => {
    yelpResponse.attractions = response;
  }),

  Promise.all(artPromises)
  .then((response) => {
    yelpResponse.arts = response;
  }),

  Promise.all(nightlifePromises)
  .then((response) => {
    yelpResponse.nightlife = response;
  }),
];

Promise.all(allPromises)
.then(() => {
  res.send(yelpResponse);
});

});

router.get('/results', (req, res) => {
  res.send(yelpResponse)
})

// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.json({ success: true });
});


module.exports = router;
