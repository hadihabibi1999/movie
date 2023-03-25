import React, { Component } from "react";

class Description extends Component {
  render() {
    const { Description } = this.props;
    return (
      <>
        {Description && <div data-aos="fade-up" className="description">{Description}</div>}
        {!Description && (
          <div data-aos="fade-up" className="description description-none">
            {"خلاصه داستان فیلم های برتر باکس افیس هفته"}&hellip;
          </div>
        )}
      </>
    );
  }
}

export default Description;
