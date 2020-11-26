import API, { methods } from "./api";

export const getWeather = ({ latitude, longitude }) =>
  API({
    method: methods.GET,
    url: `https://api.hgbrasil.com/weather?key=${process.env.REACT_APP_HG_KEY}&lat=${latitude}&lon=${longitude}`
  });
