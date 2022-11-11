import React from "react";
import Widget from "../Widget/Widget";
import Filter from "./Filter";
import Flights from "./Flights";
import './Details.css';

const Details=()=>{
    return(
    <div className="details">
        <Widget/>
        <div className="d-container">
            <Filter/>
            <Flights/>
        </div>
    </div>);
}

export default Details;