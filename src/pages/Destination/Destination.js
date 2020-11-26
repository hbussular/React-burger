import React, { useCallback, useContext, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { geolocated } from "react-geolocated";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../components/Layout/Layout";
import HeaderWithTwoButtons from "../../components/Header/HeaderWithTwoButtons";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { AppContext } from "../../AppRouter";

import * as weatherAPI from "../../services/weather";

import "./Destination.css";

const mapOptions = {
  fullscreenControl: false,
  zoomControl: false
};

const Destination = ({ setCurrentPage, coords }) => {
  const [_, setContext] = useContext(AppContext);
  const [currentCoords, setCurrentCoords] = useState({
    lat: -20.3541156,
    lng: -40.2992142
  });

  const defaultProps = {
    zoom: 15
  };

  useEffect(async () => {
    if (coords && coords.latitude && coords.longitude) {
      setCurrentCoords({
        lat: coords.latitude,
        lng: coords.longitude
      });

      const { data } = await weatherAPI.getWeather({
        latitude: coords.latitude,
        longitude: coords.longitude
      });

      setContext(
        {
          temperature: _.get(data, "temp", null),
          condition: _.get(data, "description")
        },
        "weather"
      );
    }

    return () => {};
  }, [coords]);

  return (
    <Layout
      headerComponent={() => (
        <HeaderWithTwoButtons
          onBack={() => setCurrentPage("salad")}
          onClose={() => setCurrentPage("startup")}
        />
      )}
    >
      <div className="destination">
        <div className="destination__maps-container">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GMAPS_KEY
            }}
            defaultCenter={currentCoords}
            defaultZoom={defaultProps.zoom}
            options={mapOptions}
          >
            {/* <FontAwesomeIcon
              icon={faMapMarker}
              style={{ height: 40, width: 40, color: "#feb602" }}
            /> */}
          </GoogleMapReact>
        </div>
        <div className="destination__button-container">
          <PrimaryButton block onClick={() => setCurrentPage("confirmation")}>
            Finalizar Pedido
          </PrimaryButton>
        </div>
      </div>
    </Layout>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Destination);
