import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/main.css';
import './styles/576.css';
import './styles/768.css';
import './styles/992.css';
import './styles/1200.css';
import './styles/1400.css';

import App from './components/App';

import { store } from './store';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

