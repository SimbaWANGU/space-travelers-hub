import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';
import dragonsReducer from './dragons/dragon';

const allReducers = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
  dragons: dragonsReducer,

});

const store = createStore(
  allReducers,
  applyMiddleware(thunk, logger),

);

export default store;
