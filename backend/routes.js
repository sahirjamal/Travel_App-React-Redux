const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const token = process.env.YELP_AUTH_TOKEN;


var state;
var yelpResponse={
  food:'',
  drinks:'',
  art:'',
  attractions:'',
  nightlife:''
}
var sahirResponse=[];
const clientId = process.env.YELP_CLIENT_ID;
const clientSecret= process.env.YELP_CLIENT_SECRET;
var yelpToken='q5koOf8KoIcJMZZZin-eTYo2xvbQ88Jc70F32zOl9VP-tGWzqeY7O6ktTbA_N_gEd0uz0qfAJ4Ftl43cVIKKByg1YgVGPA5XAXSPhn01RTmi6ssszZkQlTJ7hG6SWXYx'

// Get API Token
router.use('/token', (req, res) => {

  const token = yelp.accessToken(clientId, clientSecret)
  .then(response => {
    console.log(response.jsonBody.access_token);
  }).catch(error => {console.log(error)});
});

// Food Search

router.post('/searchResults', (req, res) => {
  const client = yelp.client(yelpToken);
  if(req.body.state){
    state=req.body.state;
}

var foodPromises=[];
var drinkPromises=[];
var artPromises=[];
var attractionPromises=[];
var nightlifePromises=[];

if(state.searchReducer.foods.length > 0){
  state.searchReducer.foods.forEach(function(term){
    foodPromises.push(client.search({
      term:term,
      location: state.locationReducer.location || 'San Francisco, CA',
      radius:1000,
      open_now:true
    }))
  })
  Promise.all(foodPromises)
    .then(function(response){
      yelpResponse.food = response;
    })
}

if(state.searchReducer.drinks.length > 0){
  state.searchReducer.drinks.forEach(function(term){
    drinkPromises.push(client.search({
      term:term,
      location: state.locationReducer.location || 'San Francisco, CA',
      radius:1000,
      open_now:true
    }))
  })
  Promise.all(drinkPromises)
    .then(function(response){
      yelpResponse.drinks = response
    })
}

if(state.searchReducer.attractions.length > 0){
  state.searchReducer.attractions.forEach(function(term){
    attractionPromises.push(client.search({
      term:term,
      location: state.locationReducer.location || 'San Francisco, CA',
      radius:1000,
      open_now:true
    }))
  })
  Promise.all(attractionPromises)
    .then(function(response){
      yelpResponse.attractions = response
    })
}

if(state.searchReducer.arts.length > 0){
  state.searchReducer.arts.forEach(function(term){
    artPromises.push(client.search({
      term:term,
      location: state.locationReducer.location || 'San Francisco, CA',
      radius:1000,
      open_now:true
    }))
  })
  Promise.all(artPromises)
    .then(function(response){
      yelpResponse.art = response
    })
}

if(state.searchReducer.nightlife.length > 0){
  state.searchReducer.nightlife.forEach(function(term){
    nightlifePromises.push(client.search({
      term:term,
      location: state.locationReducer.location || 'San Francisco, CA',
      radius:1000,
      open_now:true
    }))
  })
  Promise.all(nightlifePromises)
    .then(function(response){
      yelpResponse.nightlife = response
    })
}



// client.search({
//   term:term,
//   location: state.locationReducer.location || 'San Francisco, CA'
// }).then(response => {
//   yelpResponse=response.jsonBody
// }).catch(e => {
//   res.send('error')
//   console.log(e);
// });
});

router.get('/searchResults', function(req,res){
  console.log("this is your state", state)
  res.send(yelpResponse)
})


// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.json({ success: true });
});


module.exports = router;
