import React from 'react';
import { useSelector } from 'react-redux';
import {
  Row, Col, Jumbotron, Badge,
} from 'react-bootstrap';
import Error from './Error.jsx';

const Weather = () => {
  const place = useSelector((state) => state.place);

  const iconUrl = `https://openweathermap.org/img/wn/${place.icon}@2x.png`;
  const getTemp = (temp) => {
    if (temp < 0) {
      return `-${temp}`;
    } if (temp > 0) {
      return `+${temp}`;
    }
    return temp;
  };

  return (

    <Jumbotron>
      <Row><Col><p>{place.updateTime}</p></Col></Row>
      {place.requestState === 'FAILURE' && <Error>Не удалось обновить данные</Error>}
      <Row>
        <Col className="align-self-center" md="auto"><h3>Локация: {place.name}</h3></Col>
        <Col className="align-self-center" md="auto"><h1><Badge variant={Math.sign(place.temp) ? 'warning' : 'primary'}>{getTemp(place.temp)}°</Badge></h1></Col>
        <Col className="align-self-center" md="auto"><img src={iconUrl} alt="weather" /></Col>
        <Col className="align-self-center" md="auto">{place.description}</Col>
      </Row>
      <Row>
        <Col className="align-self-center"><p>По ощущению</p></Col>
        <Col className="align-self-center"><h5>{getTemp(place.feelsLike)}°</h5></Col>
      </Row>
      <Row>
        <Col className="align-self-center"><p>Минимальная температура</p></Col>
        <Col className="align-self-center"><h5>{getTemp(place.tempMin)}°</h5></Col>
      </Row>
      <Row>
        <Col className="align-self-center"><p>Максимальная температура</p></Col>
        <Col className="align-self-center"><h5>{getTemp(place.tempMax)}°</h5></Col>
      </Row>
      <Row>
        <Col className="align-self-center"><p>Влажность</p></Col>
        <Col className="align-self-center"><h5>{place.humidity}%</h5></Col>
      </Row>
      <Row>
        <Col className="align-self-center"> <p>Видимость</p></Col>
        <Col className="align-self-center"> <h5>{place.visibility}м</h5></Col>
      </Row>
      <Row>
        <Col className="align-self-center"><p>Ветер</p></Col>
        <Col className="align-self-center"><h5>{place.windSpeed} м/c</h5></Col>
      </Row>
      <Row>
        <Col className="align-self-center"><p>Направление ветра</p></Col>
        <Col className="align-self-center"><h5>{place.windDeg}°</h5></Col>
      </Row>
      <Row>
        <Col className="align-self-center"> <p>Восход</p></Col>
        <Col className="align-self-center"> <h5>{place.sunrise}</h5></Col>
      </Row>
      <Row>
        <Col className="align-self-center"><p>Закат</p></Col>
        <Col className="align-self-center"><h5>{place.sunset}</h5></Col>
      </Row>
    </Jumbotron >
  );
};

export default Weather;
