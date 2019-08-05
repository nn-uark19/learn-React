import React, { Component } from 'react';
import RollDice from './components/RollDice';

export class App extends Component {
  render() {
    console.log('function render()- class App');
    return (
      <div className='Dice'>
        <RollDice />
      </div>
    )
  }
}

export default App;
