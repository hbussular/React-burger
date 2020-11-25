import React, { useCallback, useContext, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { geolocated } from "react-geolocated";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../components/Layout/Layout";
import HeaderWithTwoButtons from "../../components/Header/HeaderWithTwoButtons";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { AppContext } from "../../AppRouter";

import "./Destination.css";

const Destination = ({ onNext, coords }) => {
  const [_, setContext] = useContext(AppContext);
  const [currentCoords, setCurrentCoords] = useState({
    lat: -20.3541156,
    lng: -40.2992142
  });

  const defaultProps = {
    zoom: 15
  };

  useEffect(() => {
    if (coords && coords.latitude && coords.longitude) {
      setCurrentCoords({
        lat: coords.latitude,
        lng: coords.longitude
      });
    }

    return () => {};
  }, [coords]);

  return (
    <Layout headerComponent={() => <HeaderWithTwoButtons />}>
      <div className="destination">
        <div className="destination__maps-container">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCfE3hA6ebRtW2qx28b_qRxcykWXrghOxY"
            }}
            defaultCenter={currentCoords}
            defaultZoom={defaultProps.zoom}
          >
            <FontAwesomeIcon
              icon={faMapMarker}
              style={{ height: 40, width: 40, color: "#feb602" }}
            />
          </GoogleMapReact>
        </div>
        <div className="destination__button-container">
          <PrimaryButton block onClick={onNext}>
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
