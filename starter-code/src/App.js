import React, { Component } from 'react';
import './App.css';
import data from '../src/data.json'
import FilterableProductTable from './components/FilterableProductTable';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      search: ''
    };
  }

  onSearch = search => {
    this.setState({search})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <FilterableProductTable products={ data } />
      </div>
    );
  }
}

export default App;
