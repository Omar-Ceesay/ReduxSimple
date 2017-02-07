import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from "./components/video_list.js";
/*<VideoList videos={this.state.videos} /> PASSING DATA LIKE THIS IS CALLED PROPS*/

const API_KEY = "AIzaSyBMzPmcl0Bc2vLa2O5a5Gn-843K-3x6BfM";

class App extends Component{
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({videos: data});
    });
  }
  render(){
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
