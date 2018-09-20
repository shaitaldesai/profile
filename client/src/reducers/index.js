import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import profile from './reducer_profile';
// import Karma from './reducer_karma';

//telling redux: please create application state as follows
const rootReducer = combineReducers({
	// karma: Karma,
	profile: profile,
	form: formReducer
});

export default rootReducer;