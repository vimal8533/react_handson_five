import React, { useState } from "react";

const HighOrderComponent = (WrappedCounter) => {
  function HOC() {
    const [Counter, setCounter] = useState(0);
    const clickHandler = () => {
      setCounter(Counter + 1);
    };
   
    return (
      <div>
       
        <WrappedCounter
          counter={Counter}
          HandleClick={clickHandler}
          
        ></WrappedCounter>
      </div>
    );
  }
  return HOC;
};

export default HighOrderComponent;