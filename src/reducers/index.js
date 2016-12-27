import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import chatReducer from './chatReducer';

const rootReducer = combineReducers({
  chat: chatReducer,
  routing: routerReducer
});

export default rootReducer;
