import React from "react";
import { Routes ,Route} from "react-router-dom";

import PureComponent from "./PureComponent";
import Home from "./Home";
import HocDisplay from "./HocDisplay";



const RouteComponent =()=>{

    return(
        <>
        
        <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/hoc" element={<HocDisplay/>}></Route>
                <Route path="/pure_component" element={<PureComponent/>}></Route>

          
        
        </>
    )

}
export default RouteComponent
