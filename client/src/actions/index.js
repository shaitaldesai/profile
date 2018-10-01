import axios from 'axios';

const API_KEY = '';
const ROOT_URL = '/profile';

export const POST_PROFILE = 'POST_PROFILE';
export const GET_PROFILE = 'GET_PROFILE';

export function createProfile (values) {
  const request = axios.post(ROOT_URL, values);
  return {
    type: POST_PROFILE,
    payload: request
  };
}

// export function getProfile (values) {
//   const request = axios.get(ROOT_URL, values);
//   return {
//     type: POST_PROFILE,
//     payload: request
//   };
// }

export function getProfile () {
  const request = axios({
    method: 'GET',
    url: '/newProfile',
    responseType: 'json'
  })
  return {
    type: GET_PROFILE,
    payload: request
  };
}

