export const getPosition = (cb = () => {}) => {
  navigator.geolocation.getCurrentPosition(position =>
    cb({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    })
  );
};

export const getPermission = async () => {
  const permission = await navigator.permissions.query({ name: "geolocation" });

  // ['granted', 'prompt', 'denied']
  return permission.state || null;
};
