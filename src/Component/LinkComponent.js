import React from "react";
import { NavLink } from "react-router-dom";
import "./LinkComponent.css"


const LinkComponent =()=>{
    return(
        <div className="links">
            <NavLink className="link" to="/">HOME</NavLink>
            <NavLink className="link" to="hoc">HOC</NavLink>
            <NavLink className="link" to="pure_component">Pure</NavLink>

        </div>
    )
}
export default LinkComponent