import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
class Contact extends Component {
  state = {};
  render() {
    return (
   <a href="mailto:hadicyb.js@gmail.com">
       <FontAwesomeIcon className="contact" icon={faMessage} />
   </a>
     
    );
  }
}

export default Contact;
