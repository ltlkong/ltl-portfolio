import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import myInfoReducer from './myInfoReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  myInfo: myInfoReducer,
});

export default rootReducer;
