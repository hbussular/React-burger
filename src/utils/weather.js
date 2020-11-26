/**
 * Essa função retorna o tempo de entrega com base na temperatura e condiçãodo clima.
 * @param {number} temperature
 * @param {string} condition
 * @param {number} estimatedTime
 */

export const getDeliveryTime = ({ temperature, condition, estimatedTime }) => {
  let points = 0;

  if (temperature <= 20) {
    points += 0.05;
  }

  if (temperature > 20) {
    points -= 0.05;
  }

  if (String(condition).toLowerCase() === "parcialmente nublado") {
    points += 0.05;
  }

  if (String(condition).toLowerCase() === "alguns chuviscos") {
    points += 0.2;
  }

  return points * estimatedTime + estimatedTime;
};
