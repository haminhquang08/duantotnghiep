import axios from "axios";
const setHeader = (isAuthRequired, contentType, Authorization) => {
  if (isAuthRequired) {
    axios.defaults.headers.common["Authorization"] = Authorization;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
  axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = ['http://localhost:3000'];
  axios.defaults.headers.common['Access-Control-Allow-Headers'] = ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization']
  axios.defaults.headers.common["Content-Type"] = contentType;
};
const createRequest = (method, url, body, isAuthRequired, contentType, Authorization) => {
  return axios({
    method: method,
    url: url,
    data: body,
    headers: setHeader(isAuthRequired, contentType, Authorization),
  });
};

export const RequestServices = {
  get: (url, isAuthRequired, contentType = "application/json", authorization) => {
    return createRequest("GET", url, null, isAuthRequired, contentType, authorization);
  },
  post: (url, body, isAuthRequired, contentType = "application/json", authorization) => {
    return createRequest("POST", url, body, isAuthRequired, contentType, authorization);
  },
  put: (url, body, isAuthRequired, contentType = "application/json", authorization) => {
    return createRequest("PUT", url, body, isAuthRequired, contentType, authorization);
  },
  del: (url, isAuthRequired, contentType = "application/json", authorization) => {
    return createRequest("DELETE", url, null, isAuthRequired, contentType, authorization);
  },
};


export default RequestServices;
