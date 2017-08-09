import * as types from '../actions/types';
import _ from 'underscore';

const initialState = {
  foods: [],
  drinks: [],
  attractions: [],
  arts: [],
  nightlife: []
};


const searchReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.TOGGLE_FOODS:
      const currentFoods = [...state.foods];
      if (_.contains(currentFoods, action.food)) {
        const currentIndex = _.indexOf(currentFoods, action.food);
        currentFoods.splice(currentIndex,1);
      } else {
        currentFoods.push(action.food);
      }
      return Object.assign({}, state, {foods: currentFoods});
    
    case types.TOGGLE_DRINKS:
      const currentDrinks = [...state.drinks];
      if (_.contains(currentDrinks, action.drink)) {
        const currentIndex = _.indexOf(currentDrinks, action.drink);
        currentDrinks.splice(currentIndex,1);
      } else {
        currentDrinks.push(action.drink);
      }
      return Object.assign({}, state, {drinks: currentDrinks});

    case types.TOGGLE_ATTRACTIONS:
      const currentAttractions = [...state.attractions];
      if (_.contains(currentAttractions, action.attraction)) {
        const currentIndex = _.indexOf(currentAttractions, action.attraction);
        currentAttractions.splice(currentIndex,1);
      } else {
        currentAttractions.push(action.attraction);
      }
      return Object.assign({}, state, {attractions: currentAttractions});

    case types.TOGGLE_ARTS:
      const currentArts = [...state.arts];
      if (_.contains(currentArts, action.art)) {
        const currentIndex = _.indexOf(currentArts, action.art);
        currentArts.splice(currentIndex,1);
      } else {
        currentArts.push(action.art);
      }
      return Object.assign({}, state, {arts: currentArts});

    case types.TOGGLE_NIGHTLIFE:
      const currentNightlife = [...state.nightlife];
      if (_.contains(currentNightlife, action.nightlife)) {
        const currentIndex = _.indexOf(currentNightlife, action.nightlife);
        currentNightlife.splice(currentIndex,1);
      } else {
        currentNightlife.push(action.nightlife);
      }
      return Object.assign({}, state, {nightlife: currentNightlife});

    default:
      return state;
  }
};

export default searchReducer;
