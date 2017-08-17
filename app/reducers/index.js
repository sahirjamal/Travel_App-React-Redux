import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import searchReducer from './searchReducer';
import locationReducer from './locationReducer';
import resultsReducer from './resultsReducer';

const rootReducer = combineReducers({
  searchReducer,
  locationReducer,
  resultsReducer,
  router: routerReducer
})

export default rootReducer
