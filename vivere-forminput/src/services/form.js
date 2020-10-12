import axios from 'axios'
import { handleResponse, handleError, requestOptions } from '../helpers'

var config = {
  apiUrl: process.env.REACT_APP_API_URL
}

export const formDataService = {
  getData,
  postData
}

function getData () {
  const requestOptionsLocal = Object.assign({}, requestOptions)
  requestOptionsLocal.timeout = 10000
  return axios.get(`${config.apiUrl}/api/get-data`, requestOptionsLocal)
    .then(handleResponse)
    .catch(handleError)
}

function postData (dataParam) {
  return axios.post(`${config.apiUrl}/api/post-data`, dataParam, requestOptions)
    .then(handleResponse)
    .catch(handleError)
    
}
