import React, { Component } from "react";
import BoxOffice from "./BoxOffice";
import Description from "./Description";

class MiddlePart extends Component {
  state = {
    des: "",
  };
  handleDes = (des) => {
    this.setState({ des });
  };
  render() {
    return (
      <>
        <div className="box-animation">Box Office</div>
        <div className="MiddlePart">
          <BoxOffice des={this.state.des} onHandle={this.handleDes} />
          <Description Description={this.state.des} />
        </div>
      </>
    );
  }
}

export default MiddlePart;
