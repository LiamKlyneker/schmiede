import { combineReducers } from 'redux';

import itemsReducer from './Items/reducer';

const rootReducer = combineReducers({
  'items': itemsReducer,
});

export default rootReducer;
