import React from 'react';
import { connect } from 'react-redux';
import SearchPage from '../components/searchPage';
import PropTypes from 'prop-types';
import { changeLocation, toggleFoods, toggleDrinks, toggleAttractions, toggleArts, toggleNightlife } from '../actions/index';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    location: state.location,
    foods: state.foods,
    drinks: state.drinks,
    attractions: state.attractions,
    arts: state.arts,
    nightlife: state.nightlife
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatch your actions for search page here
    changeLocation: (location) => (dispatch(changeLocation(location))),
    toggleFoods: (food) => (dispatch(toggleFoods(food))),
    toggleDrinks: (drink) => (dispatch(toggleDrinks(drink))),
    toggleAttractions: (attraction) => (dispatch(toggleAttractions(attraction))),
    toggleArts: (art) => (dispatch(toggleArts(art))),
    toggleNightlife: (nightlife) => (dispatch(toggleNightlife(nightlife)))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);