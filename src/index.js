import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/SearchBar';

const API_KEY = "AIzaSyBMzPmcl0Bc2vLa2O5a5Gn-843K-3x6BfM";

const App = () => {
  return(
    <SearchBar />
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
