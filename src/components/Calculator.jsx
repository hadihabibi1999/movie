import React, { Component } from "react";

class Calculator extends Component {
  state = {
    numbers: [
      "AC",
      "+-",
      "%",
      "/",
      1,
      2,
      3,
      "x",
      4,
      5,
      6,
      "-",
      7,
      8,
      9,
      "+",
      0,
      ".",
      "=",
    ],
    output: [],
    result: 0,
    preResult: 0,
    sign: "",
  };

  handleButton = (num) => {
    let output = [...this.state.output];

    if (num >= 0 || num === ".") {
      output.push(num);
      if (output.length <= 16)
        this.setState({ output, result: Number(output.join("")) });
    } else if (num === "AC") {
      output.length = 0;
      this.setState({ output, result: 0 });
    } else if (num === "+-") this.setState({ result: this.state.result * -1 });
    else if (num === "%") this.setState({ result: this.state.result / 100 });
    else if (num === "=") this.handleResult();
    else this.calculation(output, num);
  };
  calculation = (output, sign) => {
    let preResult = this.state.result;
    this.setState({ preResult });
    output.length = 0;
    this.setState({ output, sign });
  };
  handleResult = () => {
    let finalResult;
    const { result, sign, preResult } = this.state;
    if (sign === "x") finalResult = preResult * result;
    if (sign === "/") finalResult = preResult / result;
    if (sign === "+") finalResult = preResult + result;
    if (sign === "-") finalResult = preResult - result;
    this.setState({ result: finalResult });
  };
  styleOfButtonZero = (num) => {
    if (num === 0)
      return {
        gridColumn: "1/3",
        width: "200px",
        borderBottomLeftRadius: "20px",
      };
    if (
      num === "AC" ||
      num === "/" ||
      num === "+" ||
      num === "-" ||
      num === "+-" ||
      num === "x" ||
      num === "%"
    )
      return { backgroundColor: "orange" };
    if (num === "=")
      return { borderBottomRightRadius: "20px", backgroundColor: "orange" };
  };
  render() {
    return (
      <div className="grid">
        <div className="output">
          <span className="output-text">{this.state.result}</span>
        </div>
        {this.state.numbers.map((num) => (
          <button
            onClick={() => this.handleButton(num)}
            className="clickable buttons"
            key={num}
            style={this.styleOfButtonZero(num)}
          >
            {num}
          </button>
        ))}
      </div>
    );
  }
}

export default Calculator;
