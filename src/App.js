import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.scss';
import Header from './components/Header';

class App extends Component {
  // componentDidMount() {
  //   fetch('/api/hello')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data);
  //     }) ;
  // }
  render() {
    return (
      <div>
        <Header />
        
      </div>
    );
  }
}

export default App;
