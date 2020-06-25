/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'place',
  initialState: {
    requestState: null,
    init: false,
  },
  reducers: {
    placeRequest(state) {
      state.requestState = 'REQUEST';
    },
    placeSuccess(state, { payload }) {
      state.init = true;
      const { main } = payload;
      const date = new Date();
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      const sunrise = new Date(
        payload.sys.sunrise * 1000 + payload.timezone * 1000,
      ).toUTCString().substring(17, 25);
      const sunset = new Date(
        payload.sys.sunset * 1000 + payload.timezone * 1000,
      ).toUTCString().substring(17, 25);
      state.requestState = 'SUCCESS';
      state.updateTime = `Последнее обновление: ${date.toLocaleString('ru', options)}`;
      state.name = payload.name;
      state.temp = main.temp.toFixed(1);
      state.feelsLike = main.feels_like.toFixed(1);
      state.tempMin = main.temp_min.toFixed(1);
      state.tempMax = main.temp_max.toFixed(1);
      state.humidity = main.humidity;
      state.visibility = payload.visibility;
      state.windSpeed = payload.wind.speed;
      state.windDeg = payload.wind.deg;
      state.sunrise = sunrise;
      state.sunset = sunset;
      state.description = payload.weather[0].description;
      state.icon = payload.weather[0].icon;
    },
    placeFailure(state) {
      state.requestState = 'FAILURE';
    },
  },
});

export const { actions } = slice;
export default slice.reducer;
