import { useState } from 'react';
import { connect } from 'react-redux';

import config from '../config';
import { fetchData, dataReset } from '../actions/dataActions';


const isCorrect = num => {
    return (!isNaN(num) && num >= 0) ? true : false
}


const Form = ({ fetchData, dataReset }) => {

    const [state, setState] = useState({
        length: '',
        width: '',
        height: ''
    });

    const [errState, setErrState] = useState({ err: false });

    const handleChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        });

        setErrState({ err: isCorrect(target.value) ? false : true });
    };

    const handleClear = () => {
        setState({
            length: '',
            width: '',
            height: '',
        });
        dataReset();
    }

    const handleSubmit = event => {
        event.preventDefault();
        fetchData(config.url, state);
    };

    return <form className="main-form">

        <input
            name='length'
            type="text"
            value={state.length}
            onChange={handleChange}
            placeholder="length"
            required
            autoFocus
            className="text-input text-input-length"
        />

        <input
            name='width'
            type="text"
            value={state.width}
            onChange={handleChange}
            placeholder="width"
            required
            className="text-input text-input-width"
        />

        <input
            name='height'
            type="text"
            value={state.height}
            onChange={handleChange}
            placeholder="height"
            required
            className="text-input text-input-height"
        />

        
        <button
            className="form-btn form-btn-send"
            onClick={handleSubmit}
            type="button"
            disabled={errState.err}
        >
            Send
        </button>

        <button
            className="form-btn form-btn-clear"
            onClick={handleClear}
            type="button"
        >
            Clear
        </button>


        <div className="err-msg">
            {errState.err && "введите положительное число"}
        </div>
        
    </form>
};


/* react-redux */
const mapDispatchToProps = dispatch => ({
    fetchData: (url, data) => dispatch(fetchData(url, data)),
    dataReset: () => dispatch(dataReset),
});

export default connect(
    null,
    mapDispatchToProps
)(Form);