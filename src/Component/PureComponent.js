import React, { useState } from "react";
import "./ClickIncrease.css";
import "./PureCompo.css";

const PureComponent = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const clickHandle = () => {
    setCounter(counter + 1);
  };
  const mouseOverHandler = () => {
    setCounter2(counter2 + 1);
  };
  return (
    <>
      <div className="pureDisplay">
        <h4>Function is said to be pure if it meets the following two conditions:</h4>
        <ul>
          <li>Its return value is only determined by its input values</li>
          <li>Its return value is always the same for the same input values</li>
          <li>
            Pure functions are a programming concept and by utilizing this
            concept we can improve our code by removing a large category of bugs
          </li>
        </ul>
        <h5>
          A React component is considered pure if it renders the same output for
          the same state and props. For this type of class component
        </h5>
      </div>

      <div className="pureDisplay2">
        <h2>Pure Component</h2>
        <div className="pureImage"></div>

        <div className="increase__example">
          <h4> Increase with buttonn Click : {counter}</h4>
          <button className="Increase" onClick={clickHandle}>
            Increase button
          </button>

          <h4 onMouseOver={mouseOverHandler}>
            Increase with the Hover : {counter2}
          </h4>
        </div>
      </div>
    </>
  );
};

export default PureComponent;