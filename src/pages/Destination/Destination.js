import React, { useContext, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { geolocated } from "react-geolocated";
import { get } from "lodash";
import { Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../components/Layout/Layout";
import HeaderWithTwoButtons from "../../components/Header/HeaderWithTwoButtons";
import PrimaryButton from "../../components/Button/PrimaryButton";

import pin from "../../assets/images/pin.png";

import * as weatherAPI from "../../services/weather";
import { store } from "../../store.js";
import { getPosition } from "../../utils/geolocation";

import "./Destination.css";

const Destination = ({ coords }) => {
  const [mapIsLoaded, setMapIsLoaded] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({
    lat: -20.3541156,
    lng: -40.2992142
  });

  const globalState = useContext(store);
  const { dispatch } = globalState;

  const navToNextPage = page => dispatch({ type: "navigate", data: page });

  // Atualiza o clima por meio das coordenadas
  const updateWeatherAndCoords = async ({ lat, lng }) => {
    if (!mapIsLoaded) {
      return;
    }

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

  // Essa função é acionada quando o usuário mover o mapa.
  const handleOnBoundsChange = ({ center }) => {
    setCurrentPosition({ lat: center.lat, lng: center.lng });
    updateWeatherAndCoords({ lat: center.lat, lng: center.lng });
  };

  /**
   * Quando a API do GoogleMaps for carregada, essa função irá
   * mudar a variável MapIsLoaded para true, logo várias outras
   * funções responsáveis por capturar as coordenadas do usuário
   * poderão ser utilizadas.
   */
  const handleApiLoaded = () => {
    setMapIsLoaded(true);
  };

  // Essa função recupera a posição atual do usuário quando o botão de CrossHairs for acionado.
  const getCurrentPosition = () =>
    getPosition(({ lat, lng }) => {
      setCurrentPosition({ lat, lng });
      updateWeatherAndCoords({ lat, lng });
    });

  /**
   * Estados do componente
   */

  useEffect(async () => {
    if (coords && coords.latitude && coords.longitude) {
      updateWeatherAndCoords({ lat: coords.latitude, lng: coords.longitude });
    }

    return () => {};
  }, [coords, mapIsLoaded]);

  return (
    <Layout
      headerComponent={() => (
        <HeaderWithTwoButtons
          onBack={() => navToNextPage("cheese")}
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
            center={currentPosition}
            defaultCenter={currentPosition}
            defaultZoom={17}
            options={{
              fullscreenControl: false,
              zoomControl: false
            }}
            onChange={handleOnBoundsChange}
            onGoogleApiLoaded={handleApiLoaded}
          ></GoogleMapReact>
          <Image src={pin} className="destination__pin" />
          <div className="destination__maps__center-button">
            <Button onClick={getCurrentPosition}>
              <FontAwesomeIcon icon={faCrosshairs} />
            </Button>
          </div>
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
