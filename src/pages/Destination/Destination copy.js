import React, { useContext, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { geolocated } from "react-geolocated";
import { get } from "lodash";
import { Image } from "react-bootstrap";

import Layout from "../../components/Layout/Layout";
import HeaderWithTwoButtons from "../../components/Header/HeaderWithTwoButtons";
import PrimaryButton from "../../components/Button/PrimaryButton";
import pin from "../../assets/images/pin.png";

import * as weatherAPI from "../../services/weather";
import { store } from "../../store.js";

import "./Destination.css";

const Destination = ({ coords }) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const [currentCoords, setCurrentCoords] = useState({
    lat: -20.3541156,
    lng: -40.2992142
  });

  const navToNextPage = page => dispatch({ type: "navigate", data: page });

  useEffect(async () => {
    if (coords && coords.latitude && coords.longitude) {
      setCurrentCoords({
        lat: Math.round(coords.latitude),
        lng: Math.round(coords.longitude)
      });

      dispatch({
        type: "coords",
        data: {
          lat: Math.round(coords.latitude),
          lng: Math.round(coords.longitude)
        }
      });

      const { data } = await weatherAPI.getWeather({
        latitude: coords.latitude,
        longitude: coords.longitude
      });

      dispatch({
        type: "weather",
        data: {
          temperature: get(data, "results.temp", null),
          condition: get(data, "results.description", null)
        }
      });
    }

    return () => {};
  }, [coords]);

  return (
    <Layout
      headerComponent={() => (
        <HeaderWithTwoButtons
          onBack={() => navToNextPage("souce")}
          onClose={() => navToNextPage("startup")}
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
            defaultZoom={17}
            options={{
              fullscreenControl: false,
              zoomControl: false
            }}
          >
            <div>a</div>
          </GoogleMapReact>
        </div>
        <div className="destination__button-container">
          <PrimaryButton block onClick={() => navToNextPage("confirmation")}>
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
