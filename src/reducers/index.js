import { combineReducers } from 'redux';
import { dataReducer } from './dataReducer';

export const rootReducer = combineReducers({
    threeData: dataReducer,
});
