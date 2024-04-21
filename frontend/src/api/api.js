import axios from "axios";

const BASE_URL = 'http://localhost:3003';

const reserveAPI = async ({ method, route, params, data }) => {
  const url = `${BASE_URL}${route}`;
  const options = {
    method,
    url,
    headers: {
      "Content-Type": "application/json",
    },
    params,
    data,
  };

  const res = await axios(options);
  return res.data;
};
export default reserveAPI;
