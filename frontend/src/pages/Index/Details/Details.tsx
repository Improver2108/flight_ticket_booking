import React from "react";
import Widget from "../Widget/Widget";
import Filter from "./Filter";
import Flights from "./Flights";
import './Details.css';
import { useLocation } from "react-router-dom";

const Details=()=>{
    const {state}:any=useLocation();  
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