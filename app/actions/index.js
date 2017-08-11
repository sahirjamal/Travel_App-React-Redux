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

// Budget Function

export function changeBudget(budget) {
  return {
    type: types.CHANGE_BUDGET,
    budget
  };
}