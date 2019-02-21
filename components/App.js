import React, { Component } from 'react';
import Character from './Character'
import Header from './Header'
import MGenerator from './MGenerator'
import SWpic from './swpic.png'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Character />
        <MGenerator />
      </div>
    );
  }
}

export default App;
