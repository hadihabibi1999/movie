import React, { Component } from "react";
import Counters from "./Counters";
import { getCounters } from "../services/fakeCountersServices";
import NavBar from "./NavBar";
import Calculator from "./Calculator";

class Premium extends Component {
  state = {
    counters: [],
    pmonth:0,
    pday:0
  };

  componentDidMount() {
    this.setState({ counters: getCounters() });
  }
  handleNavBar = () => {
    return this.state.counters.filter((counter) => counter.value > 0).length;
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    if (counter.value <= 0) return;
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  handleDelete = (counter) => {
    const counters = this.state.counters.filter((e) => e.id !== counter.id);
    this.setState({ counters });
  };
  handlePriceM = (count) => {
    return count * 25000;

  };
  handlePriceD = (count) => {
    if (count >= 30) {
      const counters = [...this.state.counters];
      counters[0].value++;
      counters[1].value = 0;
    }
    return count * 1000;
  };
  handleTotal = () => {
   
  };
  render() {
    return (
      <>
        <NavBar />
        {this.state.counters.length !== 0 && (
          <p
            style={{
              fontSize: "20px",
              position: "absolute",
              right: "19vw",
              top: "44.5vh",
            }}
          >
            {this.state.counters[0].value} x 25000t ={" "}
            {this.handlePriceM(this.state.counters[0].value)}t
          </p>
        )}
        {this.state.counters.length !== 0 && (
          <p
            style={{
              fontSize: "20px",
              position: "absolute",
              right: "20vw",
              top: "56vh",
            }}
          >
            {this.state.counters[1].value} x 1000t ={" "}
            {this.handlePriceD(this.state.counters[1].value)}t
          </p>
        )}
        <p
          style={{
            fontSize: "20px",
            position: "absolute",
            right: "20vw",
            top: "70vh",
          }}
        >
          {this.handleTotal()} جمع کل
        </p>
        <div className="premium">
          <Calculator />
          <Counters
            counters={this.state.counters}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            /*    onDelete={this.handleDelete} */
          />
        </div>
      </>
    );
  }
}

export default Premium;
