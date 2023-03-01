import React from "react";
import './Filter.css'

const Time =({title}:any)=>{
    return (
        <div className="dfft-time">
            <div className="dfftt-title">{title}</div>
            <button className="f-button">00-06</button>
            <button className="f-button">06-12</button>
            <button className="f-button">12-18</button>
            <button className="f-button">18-00</button>
        </div>
    )
}

const Checkbox=({flight}:any)=>{
    return(
        <div className="dffpb-checkbox">
            <label htmlFor={flight}>
                <input type="checkbox" id={flight}/>
                <i></i>
                <span>
                    {flight}
                </span>
            </label>
        </div>
    )
}

const Filter = () =>{
    return(
        <div className="d-flight-filter">
            <div className="df-heading">
                <div className="dfh-title">Filters</div>
                <button className="dfh-clear">Clear All</button>
            </div>
            <div className="df-filters">
                <div className="dff-stops">
                    <div className="dffs-title">Number of Stops</div>
                    <div className="dffs-stops">
                        <button className="f-button">Non-stop</button>
                        <button className="f-button">1 Stop</button>
                        <button className="f-button" disabled>2+ Stops</button>
                    </div>
                </div>
                <div className="dff-time">
                    <div className="dfft-title">From-To</div>
                    <Time title="Departure Time"/>
                    <Time title="Arrival Time"/>
                </div>
                <div className="dff-more">
                    <div className="dffm-title">More Filters</div>
                    <div className="dffm-button">
                        <button className="f-button">Refundable</button>
                        <button className="f-button">Handbag Only</button>
                        <button className="f-button">Free Meal</button>
                    </div>
                </div>
                <div className="dff-prefer">
                    <div className="dffp-title">Preferred airlines</div>
                    <div className="dffp-buttons">
                       <Checkbox flight="IndiGo"/>
                       <Checkbox flight="Vistara"/>
                       <Checkbox flight="Air Asia"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Filter;