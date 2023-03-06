import { duration } from "@mui/material";
import React from "react";
import './Flights.css'

const List=({flight,departureTime,duration,arrivalTime,price}:any)=>{
    return(
        <div className="dfdfl-list">
            <div className="dfdfll-logo">
                <img src={flight["link"]} alt="" />
                <figcaption>{flight["name"]}</figcaption>
            </div>
            <div>{departureTime}</div>
            <div>
                <div>{duration}</div>
                <div></div>
                <div>X stops</div>
            </div>
            <div>{arrivalTime}</div>
            <div>{price}</div>
            <div className="details-submission ">
                <button>Book</button>
            </div>
        </div>
    )
}

const Flights = () =>{
    const airAsia={link:"https://d1u069vtk5j1z6.cloudfront.net/flights/icons/airlines/flights_I5_xxxhdpi.png",name:"AirAsia"};
    const vistara={link:"https://d1u069vtk5j1z6.cloudfront.net/flights/icons/airlines/flights_UK_xxxhdpi.png",name:"Vistara"};
    const indigo={link:"https://d1u069vtk5j1z6.cloudfront.net/flights/icons/airlines/flights_6E_xxxhdpi.png",name:"IndiGo"};
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
                    {[...Array(8)].map((ele)=>{
                        return(
                            <>
                                <List flight={airAsia} departureTime="04:55" duration="5h 55m" arrivalTime="10:50" price="4092"/>
                                <List flight={vistara} departureTime="03:55" duration="5h 5m" arrivalTime="11:50" price="4122"/>
                                <List flight={indigo} departureTime="04:55" duration="6h 11m" arrivalTime="12:11" price="3192"/>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
        
    )
}

export default Flights;