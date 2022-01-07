import {combineReducers} from 'redux';

import home from './groups/home';

const appReducers = combineReducers({
  home,
});

export default (state: any, action: any) => {
  return appReducers(state, action);
};
