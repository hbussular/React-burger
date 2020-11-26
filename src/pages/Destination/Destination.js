import React, { useContext, useEffect } from "react";
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

  const navToNextPage = page => dispatch({ type: "navigate", data: page });

  const updateWeatherAndCoords = async ({ lat, lng }) => {
    dispatch({
      type: "coords",
      data: {
        lat: parseFloat(lat).toFixed(4),
        lng: parseFloat(lng).toFixed(4)
      }
    });

    const { data } = await weatherAPI.getWeather({
      latitude: lat,
      longitude: lng
    });

    dispatch({
      type: "weather",
      data: {
        temperature: get(data, "results.temp", null),
        condition: get(data, "results.description", null)
      }
    });
  };

  const handleOnBoundsChange = ({ center }) => {
    updateWeatherAndCoords({ lat: center.lat, lng: center.lng });
  };

  useEffect(async () => {
    if (coords && coords.latitude && coords.longitude) {
      updateWeatherAndCoords({ lat: coords.latitude, lng: coords.longitude });
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
            defaultCenter={{
              lat: -20.3541156,
              lng: -40.2992142
            }}
            defaultZoom={17}
            options={{
              fullscreenControl: false,
              zoomControl: false
            }}
            onChange={handleOnBoundsChange}
          ></GoogleMapReact>
          <Image src={pin} className="destination__pin" />
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
