const getUrl = (query = 'москва') => {
  if (typeof query === 'object') {
    return `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${query.latitude}&lon=${query.longitude}&lang=ru&appid=1b016a8b0ea74f00ed53c8bed01c52ec&units=metric`;
  }
  return `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${query}&lang=ru&appid=1b016a8b0ea74f00ed53c8bed01c52ec&units=metric`;
};

export default getUrl;
