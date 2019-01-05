import React, { Component } from 'react';
import { PhotoListContainer } from '../../Containers/PhotoList/PhotoListContainer';
import { SearchInputContainer } from '../../Containers/SearchInput/SearchInputContainer';
import { CategoriesListContainer } from '../../Containers/CategoriesList/CategoriesListContainer';
import { FavoriteAndSortByContainer } from '../FavoriteAndSortBy/FavoriteAndSortByContainer';
// import DevTools from '../../DevTools';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header, Logo } from '../../StyledComponents/Header';


class App extends Component {

  componentDidMount() {
    this.props.fetchphotos();
  }

  render() {
    return (
      <div>
        <Header> 
          <Logo href='/'>
            <FontAwesomeIcon className="App-logo" icon="camera" />
          </Logo>
          <SearchInputContainer /> 
          <FavoriteAndSortByContainer />
        </Header>
        <CategoriesListContainer />
        <main>
          {this.props.isFetching ? <PhotoListContainer /> : 'loading'}
        </main>
        {/* <DevTools /> */}
      </div>
    );
  }
}

export default App;
