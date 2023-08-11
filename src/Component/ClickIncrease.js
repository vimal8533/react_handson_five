import React from "react";
import HighOrderComponent from "./HighOrderComponent";
import "./ClickIncrease.css"
const ClickIncrease = (props)=>{

 
    
    return(
        <>
        
        <div className="increase__example">
            <h2>Increase with the Click : {props.counter}</h2>
            <button className="Increase" onClick={props.HandleClick}> Increase </button>
        </div>
        </>
    )
}

export default HighOrderComponent(ClickIncrease);