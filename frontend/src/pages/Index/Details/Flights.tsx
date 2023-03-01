import { duration } from "@mui/material";
import React from "react";
import './Flights.css'

const List=({fLogo,departureTime,duration,arrivalTime,price}:any)=>{
    return(
        <div className="dfdfl-list">
            <div>{fLogo}</div>
            <div>{departureTime}</div>
            <div>
                <div>{duration}</div>
                <div></div>
                <div>X stops</div>
            </div>
            <div>{arrivalTime}</div>
            <div>{price}</div>
            <div>Book</div>
        </div>
    )
}

const Flights = () =>{
    return (
        <div className="d-flight-details">
            <div className="dfd-heading">
                <div>New Delhi - Mumbai</div>
                <div>Logo</div>
            </div>
            <div className="dfd-flightList">                
                <div className="dfdf-columns">
                    <button className="dfdfc-departure">Departure</button>
                    <button className="dfdfc-duration">Duration</button>
                    <button className="dfdfc-arrival">Arrival</button>
                    <button className="dfdfc-price">Price</button>
                </div>                
                <div className="dfdf-list">
                    <List fLogo="IndiGo" departureTime="04:55" duration="5h 55m" arrivalTime="10:50" price="4092"/>
                    <List fLogo="AirAsia" departureTime="03:55" duration="5h 5m" arrivalTime="11:50" price="4122"/>
                    <List fLogo="Vistara" departureTime="04:55" duration="6h 11m" arrivalTime="12:11" price="3192"/>
                </div>
            </div>
        </div>
        
    )
}

export default Flights;