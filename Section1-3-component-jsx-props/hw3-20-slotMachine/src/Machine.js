import React from "react";

class Machine extends React.Component {
  render() {
    console.log("function render- class Machine");
    const { s1, s2, s3 } = this.props;

    return (
      <div>
        <p>
          {s1}
          {s2}
          {s3}
        </p>
        <p>{s1 === s2 && s2 === s3 ? "You win!" : "You lose!"}</p>
      </div>
    );
  }
}
export default Machine;
