import React from "react";
import ClickIncrease from "./ClickIncrease";
import HoverComponent from "./HoverComponent";
import "./HocDisplay.css"

const HocDisplay = ()=>{
    return(
        <>
             <div className="hoc__display">
          High Order Component means --:
          <ul>
            <li>A higher-order component is a function that takes in a component and
          returns a new component.</li>
            <li>A highh-order component (HOC) is an advaced
          technique in React for re-using component logic.</li>
            <li>It is used to make our project more optimized.</li>
            <li>Whereas a component transforms props into UI, a
          higher-order component transforms a component into another component.</li>
          </ul>
           
          
        </div>
        
        <div className="clickAndHover">
        <h2>HOC Component</h2>
        <div className="hocImage"></div>
        <div>
            <ClickIncrease/>
            <HoverComponent/></div>
        </div>
       

        </>
    )
    
}

export default HocDisplay