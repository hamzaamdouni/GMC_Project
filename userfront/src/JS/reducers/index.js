import { combineReducers } from 'redux';
import visiteurReducer from './visiteur'

const rootReducer = combineReducers({ visiteurReducer  });
export default rootReducer;