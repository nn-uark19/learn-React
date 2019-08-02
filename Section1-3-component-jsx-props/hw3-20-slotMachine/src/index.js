import React from "react";
import ReactDOM from "react-dom";
import Machine from "./Machine";

var fruits = [
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍌",
  "🍍",
  "🍎",
  "🍏",
  "🍐",
  "🍒",
  "🍓",
  "🥝",
  "🍅",
  "🥑"
];

class App extends React.Component {
  render() {
    console.log("function render- class App");
    return (
      <div>
        <h1>Slot Machines!</h1>
        <Machine s1="🥝" s2="🍓" s3="🍏" />
        <Machine s1="🍓" s2="🍓" s3="🍓" />
        <Machine s1="🍏" s2="🍓" s3="🍏" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
