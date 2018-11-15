import React, { Component } from 'react';
import './App.css';
import { PhotoListContainer } from '../../Containers/PhotoList/PhotoListContainer';
import { SearchInputContainer } from '../../Containers/SearchInput/SearchInputContainer';
import { CategoriesListContainer } from '../../Containers/CategoriesList/CategoriesListContainer';
import { FavoriteAndSortByContainer } from '../FavoriteAndSortBy/FavoriteAndSortByContainer';
import DevTools from '../../DevTools';

class App extends Component {

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="App">
        <SearchInputContainer /> 
        <FavoriteAndSortByContainer />
        <CategoriesListContainer />
        <PhotoListContainer />
        <DevTools />
      </div>
    );
  }
}

export default App;
