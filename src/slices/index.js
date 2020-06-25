import { combineReducers } from 'redux';
import place, { actions as placeActions } from './place';
import url, { actions as urlActions } from './url';

export default combineReducers({
  place,
  url,
});

const actions = {
  ...placeActions,
  ...urlActions,
};

export { actions };
