import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Navbar } from 'react-bootstrap';
import Weather from './Weather.jsx';
import getUrl from '../utils';
import Search from './Search.jsx';
import Error from './Error.jsx';
import getData from '../slices/asyncActions';

const App = () => {
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place);

  useEffect(() => {
    async function asyncWrap() {
      try {
        const { coords } = await new Promise(
          (resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject),
        );
        const coordinates = { latitude: coords.latitude, longitude: coords.longitude };
        const url = getUrl(coordinates);
        await dispatch(getData(url));
      } catch {
        dispatch(getData(getUrl()));
      }
    }
    asyncWrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand>Прогноз погоды</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Search />
        </Navbar.Collapse>
      </Navbar>
      {place.init && <Weather />}
      {!place.init && place.requestState === 'REQUEST' && <div>Загрузка...</div>}
      {!place.init && place.requestState === 'FAILURE' && <Error>Не удалось загрузить данные</Error>}
    </Container>
  );
};
export default App;
