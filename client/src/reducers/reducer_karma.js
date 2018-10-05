import { GET_KARMA } from '../actions/index.js';

export default function (state={}, action) {
  switch(action.type) {
    case GET_KARMA:
      console.log('KARMA REDUCER:', action.payload.data);
      return action.payload.data;
    default: 
      return state;
  }
}