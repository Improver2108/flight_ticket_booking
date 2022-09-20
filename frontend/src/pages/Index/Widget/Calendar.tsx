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
        </div>
    );
}

export default Calendar 