import API, { methods } from "./api";

/**
 * Recupera o clima da posição atual do usuário
 * @param {object} { latitude, longitude }
 */
export const getWeather = ({ latitude, longitude }) =>
  API({
    method: methods.GET,
    url: `https://api.hgbrasil.com/weather?key=${process.env.REACT_APP_HG_KEY}&lat=${latitude}&lon=${longitude}`
  });
