import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppContainer } from './Containers/App/AppContainer';
import { Provider } from 'react-redux';
import { store } from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart)


ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);