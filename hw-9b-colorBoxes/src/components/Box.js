import React, { Component } from 'react';
import { pickRandom } from '../js/helpers';
import './Box.css';

export class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.pickColor = this.pickColor.bind(this);
    this.state = { color: pickRandom(this.props.allColors) };
  }

  static defaultProps = {
    allColors: [
      'SILVER',
      'GRAY',
      'BLACK',
      'RED',
      'MAROON',
      'YELLOW',
      'OLIVE',
      'LIME',
      'GREEN',
      'AQUA',
      'TEAL',
      'BLUE',
      'NAVY',
      'FUCHSIA',
      'PURPLE'
    ]
  };

  pickColor() {
    console.log('function pickColor()- classBox');
    var randColor = pickRandom(this.props.allColors);
    while (randColor.toLowerCase() === this.state.color.toLowerCase()) {
      console.log(' random same color, will random again');
      randColor = pickRandom(this.props.allColors);
    }
    this.setState({color: randColor});
  }

  handleClick() {
    console.log('function handleClick()- class Box');
    this.pickColor();
  }

  render() {
    console.log('function render()- class Box');
    return (
      <div className='Box'
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      >
        Box
      </div>
    );
  }
}

export default Box;
