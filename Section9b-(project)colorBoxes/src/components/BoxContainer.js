import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

export class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 16
  };

  render() {
    console.log('function render()- class BoxContainer');
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box />
    ));
    return (
      <div className='BoxContainer'>
        {boxes}
      </div>
    );
  }
}

export default BoxContainer;
