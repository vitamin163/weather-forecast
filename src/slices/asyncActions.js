import axios from 'axios';
import { actions as placeActions } from './place';

const {
  placeRequest, placeSuccess, placeFailure,
} = placeActions;

export default (url) => async (dispatch) => {
  dispatch(placeRequest());
  try {
    const { data } = await axios.get(url);
    dispatch(placeSuccess(data));
  } catch (e) {
    console.log(`Oops! ${e.message}`);
    dispatch(placeFailure());
  }
};
