import React from "react";
import HighOrderComponent from "./HighOrderComponent";

const HoverComponent = (props)=>{
    return(
        <>
        <div>
        <h2  onMouseOver={props.HandleClick}>Increase with the Hover : {props.counter}</h2>
        </div>
        </>
    )
}

export default HighOrderComponent(HoverComponent);