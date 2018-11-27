import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './Containers/App/AppContainer';
import { Provider } from 'react-redux';
import { store } from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCamera, faSearch } from '@fortawesome/free-solid-svg-icons';
import { GlobalStyle } from './StyledComponents/GlobalStyle';

library.add(faHeart, faCamera, faSearch);

ReactDOM.render(
    <Provider store={store}>
    <div>
        <AppContainer />
        <GlobalStyle />
    </div>
    </Provider>,
    document.getElementById('root')
);