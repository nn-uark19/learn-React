import React, { Component } from 'react';
import Dice from './Dice';
import './RollDice.css';

export class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { dice1: 'five', dice2: 'four', isRolling: false };
    this.handleClick = this.handleClick.bind(this);
  }

  static defaultProps = {
    faceAll: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  handleClick(e) {
    console.log('function handleClick()- class RollDice');
    // random 2 faces
    const r1 = this.props.faceAll[
      Math.floor(Math.random() * this.props.faceAll.length)
    ];
    const r2 = this.props.faceAll[
      Math.floor(Math.random() * this.props.faceAll.length)
    ];
    // set state
    this.setState({ dice1: r1, dice2: r2, isRolling: true });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    console.log('function render()- class RollDice');
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <div className='RollDice-dice'>
            <Dice face={this.state.dice1} isRolling={this.state.isRolling}/>
          </div>
          <div className='RollDice-dice'>
            <Dice face={this.state.dice2} isRolling={this.state.isRolling}/>
          </div>
        </div>

        <button onClick={this.handleClick} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
        </button>
      </div>
    );
  }
}

export default RollDice;
