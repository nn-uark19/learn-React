import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('function handleClick()- class App');
    var newNum = Math.floor(Math.random() * 5) + 1;
    this.setState({ number: newNum });
  }

  render() {
    console.log('function render()- class App');
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Number is {this.state.number}</h1>
        {this.state.number === 3 ? (
          <h2>YOU WIN!</h2>
        ) : (
          <button onClick={this.handleClick}>Random Number</button>
        )}
      </div>
    );
  }
}

export default App;
