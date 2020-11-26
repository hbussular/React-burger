import axios from "axios";

// Métodos HTTP

export const methods = {
  GET: "GET",
  POST: "POST"
};

// Cria a instância do Axios

const createAxios = axios.create();

//Encapsula a instância do axios de forma a personalizar alguns parametros e regras de negócio.

const API = ({ url, method, data, headers = {}, queries = {}, ...rest }) => {
  const mixinHeaders = { ...headers };
  const mixinQueries = { ...queries };

  return createAxios({
    url,
    method,
    data,
    headers: mixinHeaders,
    params: mixinQueries,
    ...rest
  });
};

export default API;
