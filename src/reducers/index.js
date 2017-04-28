import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  routing: routerReducer,
});

export default rootReducer;
