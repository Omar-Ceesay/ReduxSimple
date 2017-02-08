import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/SearchBar';
import VideoList from "./components/video_list.js";
import VideoDetail from "./components/video_detail.js";
/*<VideoList videos={this.state.videos} /> PASSING DATA LIKE THIS IS CALLED PROPS*/

const API_KEY = "AIzaSyBMzPmcl0Bc2vLa2O5a5Gn-843K-3x6BfM";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('reactjs');
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
