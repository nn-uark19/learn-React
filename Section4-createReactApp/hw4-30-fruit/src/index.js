import React from "react";
import ReactDOM from "react-dom";
import fruits from "./foods";
import {choice, remove} from './helpers';

class App extends React.Component {
  render() {
    console.log('function render- class App')
    const fruit_choice = choice(fruits);
    return (
      <div>
        <h1>Hw4-29 </h1>
        <p>This is what we have {fruits.length} {fruits}</p>
        <p>I’d like one {fruit_choice}, please.</p>
        <p>Here you go: {fruit_choice}</p>
        <p>Delicious! May I have another?</p> 
        {remove(fruits, fruit_choice)}
        <p>I’m sorry, we’re all out. We have {fruits.length} {fruits}left.</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
