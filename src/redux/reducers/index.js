import { combineReducers } from 'redux';
import {POIsReducer} from './POIReducer';

const rootReducer = combineReducers({
    POIList: POIsReducer
});

export default rootReducer;