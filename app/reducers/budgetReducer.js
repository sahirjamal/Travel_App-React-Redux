import * as types from '../actions/types';

const initialState = {
  budget: 100
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_BUDGET:
      return Object.assign({}, state, {budget: action.budget}); // add the changed state here after search is selected
    default:
      return state;
  }
};

export default budgetReducer;
