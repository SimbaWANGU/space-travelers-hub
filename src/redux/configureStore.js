import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
<<<<<<< HEAD
import missionsReducer from './mission/mission';

const allReducers = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,

=======
import dragonsReducer from './dragons/dragon';

const allReducers = combineReducers({
  rockets: rocketsReducer,
  dragons: dragonsReducer,
>>>>>>> ea56e6ddcfb7a03e0597431bc65c39b435cd2bee
});

const store = createStore(
  allReducers,
  applyMiddleware(thunk, logger),

);

export default store;
