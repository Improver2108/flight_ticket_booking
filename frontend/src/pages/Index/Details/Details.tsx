import React from "react";
import Widget from "../Widget/Widget";
import Filter from "./Filter";
import Flights from "./Flights";
import './Details.css';
import { useLocation } from "react-router-dom";

const Details=()=>{
    const {state}:any=useLocation();
    console.log(state)
    return(
    <div className="details">
        <Widget 
            cityToStart={state.fromCity} 
            cityToEnd={state.toCity} 
            currentFromDate={state.fromBookingDate} 
            currentToDate={state.toBookingDate} 
            currentSelected={state.people}
            currentRadioSelected={state.flightType}
        />
        <div className="d-container">
            <Filter/>
            <Flights/>
        </div>
    </div>);
}

export default Details;