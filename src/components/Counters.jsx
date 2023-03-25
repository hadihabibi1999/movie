import React from "react";
import Counter from "./Counter";


const Counters = ({ onDecrement, onDelete, onIncrement, counters }) => {
  return (
    <div className="width-20">
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
