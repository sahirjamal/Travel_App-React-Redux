import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import locationReducer from './locationReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  searchReducer,
  locationReducer,
  router: routerReducer
})

export default rootReducer
