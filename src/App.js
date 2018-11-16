import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.scss';
// import Header from './components/Header';

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
      <div className={`App ` + classes.AppContainer }>
        <div className="testclass">
          hello world
        </div>
      </div>
    );
  }
}

export default App;
