import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
// import axios from 'axios';
// import { actions } from '../slices';
import getData from '../slices/asyncActions';

const App = () => {
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place);

  const getUrl = (query = 'москва') => {
    if (typeof query === 'object') {
      return `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${query.latitude}&lon=${query.longitude}&lang=ru&appid=1b016a8b0ea74f00ed53c8bed01c52ec&units=imperial`;
    }
    return `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${query}&lang=ru&appid=1b016a8b0ea74f00ed53c8bed01c52ec`;
  };

  const geolocation = new Promise(
    (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject),
  );
  useEffect(() => {
    async function asyncWrap() {
      const { coords } = await geolocation;
      const coordinates = { latitude: coords.latitude, longitude: coords.longitude };
      const url = getUrl(coordinates);
      console.log(url);
      dispatch(getData(url));
    }
    asyncWrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { data: { name } } = place;
  const { data: { weather } } = place;
  console.log(weather);
  return (
    <Container>
      <div>{name}</div>
    </Container>
  );
};

export default App;
