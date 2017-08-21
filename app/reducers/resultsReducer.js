import * as types from '../actions/types';

const initialState = {
  list: {}
}

const resultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_RESULTS:
      return Object.assign({}, state, {list: action.results});
    default: 
      return state;
  }
}

export default resultsReducer
