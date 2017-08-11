import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import searchReducer from './searchReducer';
import locationReducer from './locationReducer';
import budgetReducer from './budgetReducer';


const rootReducer = combineReducers({
  searchReducer,
  locationReducer,
  budgetReducer,
  router: routerReducer
})

export default rootReducer
