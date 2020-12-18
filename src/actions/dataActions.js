import {
    DATA_REQUEST,
    DATA_REQUEST_SUCCESS,
    DATA_REQUEST_FAIL,
    DATA_RESET,
} from '../constants';


export const fetchData = (url, data) => {

    return dispatch => {
        dispatch(dataRequest);

        return fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify( data ),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return Promise.resolve(response);
        })
        .then( response => response.json() )
        .then( data => dispatch(dataRequestSuccess(data)) )
        .catch( err => dispatch(dataRequestFail(err)) );
    }
};


export const dataReset = {
    type: DATA_RESET,
};



const dataRequest = {
    type: DATA_REQUEST,
};

const dataRequestFail = err => {
    return {
        type: DATA_REQUEST_FAIL,
        error: err,
    }
};

const dataRequestSuccess = (data) => {
    return {
        type: DATA_REQUEST_SUCCESS,
        payload: data,
    }
}
