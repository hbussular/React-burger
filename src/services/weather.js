import API, { methods } from "./api";

/**
 * Recupera o clima da posição atual do usuário
 * @param {object} { latitude, longitude }
 */
export const getWeather = ({ latitude, longitude }) =>
  API({
    method: methods.GET,
    url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_HG_KEY}&units=metric&lang=pt_br`
  });
