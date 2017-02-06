import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: ''};
  }

  onInputChange(e){
    this.setState({term: e.target.value})
  }
  render() {
    return (
      <div>
        <input onChange= {this.onInputChange.bind(this)}></input>
        Value of term = {this.state.term}
      </div>
    );
  }
}

export default SearchBar;
