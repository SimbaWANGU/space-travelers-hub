import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import dragonsReducer from './dragons/dragon';

const allReducers = combineReducers({
  rockets: rocketsReducer,
  dragons: dragonsReducer,
});

const store = createStore(
  allReducers,
  applyMiddleware(thunk),
);

export default store;
