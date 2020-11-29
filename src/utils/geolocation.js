/**
 * Essa função recupera a posição atual do usuário
 * @param {function} cb
 */
export const getPosition = (cb = () => {}) => {
  navigator.geolocation.getCurrentPosition(position =>
    cb({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    })
  );
};
