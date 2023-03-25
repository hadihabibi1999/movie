import React, { Component } from "react";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh',backgroundColor:'white',height:'100vh'}}>
        <img src={require("../assets/not-found.gif")} width='500vw' />
        <span style={{fontSize:'50px',color:'gray'}}>page not found (404)</span>
      </div>
    );
  }
}

export default NotFound;
