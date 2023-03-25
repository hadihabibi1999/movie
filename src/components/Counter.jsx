import React, { Component } from "react";


class Counter extends Component {
  render() {
    const { counter, onDecrement, onDelete, onIncrement } = this.props;
    return (
      <div style={{ marginTop: -5 }} className="row ">
        <div style={{flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'1.5vh'}} className="col-2 d-flex justify-content-center align-self-center">
         <span className={[this.styleOfValue()]}>{this.valueStyle()}</span><span style={{fontSize:'10px'}}>{counter.id+'s'}</span>
        </div>
        <div className="col d-flex justify-content-center">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-primary m-2 btn-sm col-sm"
          >
            +
          </button>
          <button
            style={{ flexShrink: 0 }}
            onClick={() => onDecrement(counter)}
            className="btn btn-primary m-2 btn-sm col-sm"
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            {" "}
            -{" "}
          </button>
      {/*     <button
            onClick={() => onDelete(counter)}
            className="btn btn-danger btn-sm m-2 col-sm"
          >
            delete
          </button> */}
        </div>
      </div>
    );
  }
  valueStyle = () => {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  };
  styleOfValue = () => {
    let className = "badge  bg-";
    const { value } = this.props.counter;
    value === 0 ? (className += "info") : (className += "success");
    return className;
  };
}

export default Counter;
