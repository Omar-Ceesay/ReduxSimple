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
          <div className="container">
          	<div className="row">
          		<div className="col-md-12">
                      <div className="input-group" id="adv-search">
                          <input type="text" className="form-control" value= {this.state.term} onChange= {this.onInputChange.bind(this)} placeholder="Search for video" />
                          <div className="input-group-btn">
                              <div className="btn-group" role="group">
                                  <div className="dropdown dropdown-lg">
                                      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="caret"></span></button>
                                      <div className="dropdown-menu dropdown-menu-right" role="menu">
                                          <form className="form-horizontal" role="form">
                                            <div className="form-group">
                                              <label for="filter">Filter by</label>
                                              <select className="form-control">
                                                  <option value="0" selected>All Snippets</option>
                                                  <option value="1">Featured</option>
                                                  <option value="2">Most popular</option>
                                                  <option value="3">Top rated</option>
                                                  <option value="4">Most commented</option>
                                              </select>
                                            </div>
                                            <div className="form-group">
                                              <label for="contain">Author</label>
                                              <input className="form-control" type="text" />
                                            </div>
                                            <div className="form-group">
                                              <label for="contain">Contains the words</label>
                                              <input className="form-control" type="text" />
                                            </div>
                                            <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                                          </form>
                                      </div>
                                  </div>
                                  <button type="button" className="btn btn-primary"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
          	</div>
    );
  }
}

export default SearchBar;
