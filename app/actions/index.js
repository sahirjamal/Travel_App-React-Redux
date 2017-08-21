import * as types from './types';
import { push } from 'react-router-redux';

// Routes Function
export function navigate(route){
  return push(route)
}

// Location Functions
export function changeLocation(location) {
  return {
    type: types.CHANGE_LOCATION,
    location
  };
}

// Search Options Functions
export function toggleFoods(food) {
  return {
    type: types.TOGGLE_FOODS,
    food
  };
}

export function toggleDrinks(drink) {
  return {
    type: types.TOGGLE_DRINKS,
    drink
  };
}

export function toggleAttractions(attraction) {
  return {
    type: types.TOGGLE_ATTRACTIONS,
    attraction
  };
}

export function toggleArts(art) {
  return {
    type: types.TOGGLE_ARTS,
    art
  };
}

export function toggleNightlife(nightlife) {
  return {
    type: types.TOGGLE_NIGHTLIFE,
    nightlife
  };
}

export function toggleEvents(event) {
  return {
    type: types.TOGGLE_EVENTS,
    event
  };
}

// Results Function

export function addResults(results) {
  return {
    type: types.ADD_RESULTS,
    results
  }
}