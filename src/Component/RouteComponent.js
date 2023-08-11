import React from "react";
import { Routes ,Route, BrowserRouter} from "react-router-dom";

import PureComponent from "./PureComponent";
import Home from "./Home";
import HocDisplay from "./HocDisplay";
import LinkComponent from "./LinkComponent";


const RouteComponent =()=>{

    return(
        <>
        <BrowserRouter>
        <LinkComponent/>
        <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/hoc" element={<HocDisplay/>}></Route>
                <Route path="/pure_component" element={<PureComponent/>}></Route>

            </Routes>
        
        </BrowserRouter>
            
        
        </>
    )

}
export default RouteComponent