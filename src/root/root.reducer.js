import { combineReducers } from 'redux';

import systemReducer from '../system/reducer';
import editor from '../editor/reducer'

const rootReducer = combineReducers({ systemReducer, editor });

export default rootReducer;
