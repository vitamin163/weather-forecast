import axios from 'axios';
import { actions } from './index';

const {
  placeRequest, placeSuccess, placeFailure, setUrl,
} = actions;

let timeoutId = null;

const getData = (url) => async (dispatch) => {
  dispatch(placeRequest());
  try {
    const { data } = await axios.get(url);
    dispatch(placeSuccess(data));
    dispatch(setUrl(url));
  } catch (e) {
    console.log(`Oops! ${e.message}`);
    dispatch(placeFailure());
    throw e;
  } finally {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => dispatch(getData(url)), 60000);
  }
};

export default getData;
