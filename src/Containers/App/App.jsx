import React, { Component } from 'react';
import './App.css';
import PhotosList from '../../Presetional/PhotosList/PhotosList';
import { SearchInputContainer } from '../../Containers/SearchInput/SearchInputContainer';
import DevTools from '../../DevTools';

class App extends Component {
  componentWillMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div className="App">
        <SearchInputContainer />
        <PhotosList photos={this.props.photos} />
        <DevTools />
      </div>
    );
  }
}

export default App;
