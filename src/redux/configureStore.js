import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './mission/mission';

const allReducers = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,

});

const store = createStore(
  allReducers,
  applyMiddleware(thunk, logger),

);

export default store;
