import React, { useEffect } from 'react';
import './App.scss';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const getLocation = async () => {
      const getCoordinates = () => (
        new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject))
      );
      try {
        const coordinates = await getCoordinates();
        const { latitude } = coordinates.coords;
        const { longitude } = coordinates.coords;
        const options = {
          method: 'GET',
          url: `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=ru&appid=1b016a8b0ea74f00ed53c8bed01c52ec`,
        };
        const data = await axios(options);
        console.log(data);
      } catch (e) {
        console.log(`Oops! ${e.message}`);
      }
    };
    getLocation();
  });

  return <div>12345</div>;
};

export default App;
