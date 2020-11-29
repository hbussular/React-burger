import axios from "axios";

// Métodos HTTP

export const methods = {
  GET: "GET",
  POST: "POST"
};

// Cria a instância do Axios

const createAxios = axios.create();

//Encapsula a instância do axios de forma a personalizar alguns parametros e regras de negócio.

const API = ({ url, method, data, ...rest }) =>
  createAxios({
    url,
    method,
    data,
    ...rest
  });

export default API;
