import { combineReducers } from 'redux';
import {POIsReducer, POIReducer} from './POIReducer';

const rootReducer = combineReducers({
    POIList: POIsReducer,
    POI: POIReducer
});

export default rootReducer;