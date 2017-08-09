import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import locationReducer from './locationReducer';

const rootReducer = combineReducers({
  searchReducer,
  locationReducer,
})

export default rootReducer
