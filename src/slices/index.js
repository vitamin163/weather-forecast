import { combineReducers } from 'redux';
import place, { actions as placeActions } from './place';
import requestState, { actions as requestActions } from './requestState';
import geolocation, { actions as geolocationActions } from './geolocation';

export default combineReducers({
  place,
  requestState,
  geolocation,
});

const actions = {
  ...placeActions,
  ...requestActions,
  ...geolocationActions,
};

export { actions };
