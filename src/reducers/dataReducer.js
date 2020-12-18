import {
    DATA_REQUEST,
    DATA_REQUEST_FAIL,
    DATA_REQUEST_SUCCESS,
    DATA_RESET,
} from '../constants';


const initialState = {
    isFetching: false,
    error: '',
    data: '',
};

export function dataReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_REQUEST:
            return {
                isFetching: true,
                error: '',
                data: ''
            }

        case DATA_REQUEST_FAIL:
            return {
                isFetching: false,
                error: action.error,
                data: ''
            }

        case DATA_REQUEST_SUCCESS:
            return {
                isFetching: false,
                error: '',
                data: action.payload
            }

        case DATA_RESET:
            return initialState;

        default:
            return state;
    }
};
