import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
  static defaultProps = {
    face: 'six',
    isRolling: false
  }

  render() {
    console.log('function render()- class Dice');
    return (
      <div>
        <i className={`fas fa-dice-${this.props.face} ${this.props.isRolling && 'shaking'}`}></i>        
      </div>
    )
  }
}

export default Dice;
