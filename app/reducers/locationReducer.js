import * as types from '../actions/types';

const initialState = {
  location: ''
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_LOCATION:
      return Object.assign({}, state, {location: action.location}); // add the changed state here after search is selected
    default:
      return state;
  }
};

export default locationReducer;
