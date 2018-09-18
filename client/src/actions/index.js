import axios from 'axios';

const API_KEY = '';
const ROOT_URL = '/profile';

export const POST_PROFILE = 'POST_PROFILE';

export function createProfile (values) {
  const request = axios.post(ROOT_URL, values);
  return {
    type: POST_PROFILE,
    payload: request
  };
}

// export const FIRST_NAME = 'FIRST_NAME';
// export const LAST_NAME = 'LAST_NAME';
// export const EMAIL = 'EMAIL';

// const userInfo = {
//   selectFirstName: selectFirstName, 
//   selectlastName: selectLastName, 
//   selectEmail: selectEmail
// };

// export function postUserInfo (userInfo) {
//   const request = axios.post(ROOT_URL);
//   return {
//     type: FIRST_NAME,
//     payload: request
//   }
// }

// export function selectFirstName (firstName) {
// 	const request = axios.get(ROOT_URL)
// 	  .then(function (response) {
//       console.log(response);
// 	  })
// 	  .catch(function (error) {
//       console.log(error);
// 	  });
//   return {
//     type: FIRST_NAME,
//     payload: request
//   }
// }

// export function selectLastName (lastName) {
//   const request = axios.get(ROOT_URL)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   return {
//     type: LAST_NAME,
//     payload: request
//   }
// }

// export function selectEmail (email) {
//   const request = axios.get(ROOT_URL)
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   return {
//     type: EMAIL,
//     payload: request
//   }
// }