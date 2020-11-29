/**
 * Essa função retorna o tempo de entrega com base na temperatura e condiçãodo clima.
 * @param {number} temperature
 * @param {string} weather
 * @param {number} estimatedTime
 */

export const getDeliveryTime = ({ temperature, weather, estimatedTime }) => {
  let points = 0;

  if (temperature <= 20) {
    points += 0.05;
  }

  if (temperature > 20) {
    points -= 0.05;
  }

  if (weather.includes("nuvens")) {
    points += 0.05;
  }

  if (weather.includes("névoa")) {
    points += 0.2;
  }

  return points * estimatedTime + estimatedTime;
};
