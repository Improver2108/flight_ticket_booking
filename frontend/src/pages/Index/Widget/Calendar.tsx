import React from "react";
import './Calendar.css'

const Calendar =()=>{

    return (
        <div className="calendar-container">
            <button className="left-slider">
                <div className="left-slider-layout"></div>
            </button>
            <button className="right-slider">
                <div className="right-slider-layout"></div>
            </button>
            <div className="calendar-layout">
                <div className="inner-calendar-layout">
                    <div className="calendar-dates">month1</div>
                    <div className="calendar-dates">month1</div>                    
                </div>
            </div>
            <div className="price-information">
                <p>Fares indicate price for 1 Adult and Economy Class in INR and are subject to change</p>      
            </div>         
        </div>
    );
}
export default Calendar 