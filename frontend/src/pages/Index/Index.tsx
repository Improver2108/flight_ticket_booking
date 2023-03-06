import React from "react";
import Widget from './Widget/Widget'
import './Index.css'
// import Detail from "./Details/Details";


const Index=()=>{
    return(
        <div className="index">
            <div className="widget-container">
                <Widget/>
            </div>
        </div>
    )
}

export default Index;