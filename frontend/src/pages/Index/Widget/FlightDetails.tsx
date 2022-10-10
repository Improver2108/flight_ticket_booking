import React, { useState } from "react";
import './FlightDetails.css'

const GenerateButtons = ({ start, end }: any) => {
    const [selected, setSelected] = useState<number>(start);
    const buttonNumers = [];

    const setCount =  (num:number)=>{
        if(num!==selected) setSelected(i=>num);
    }
    
    for (let i = start; i <= end; i++) 
        buttonNumers.push(i);
    
    return <>{buttonNumers.map(i => <button 
        key={i} 
        className={'pc-style'+(selected===i?' pc-click':'')} 
        onMouseUp={()=>setCount(i)}>
    {i}</button>)}</>
}

const RadioInput = ({type,coach}:any) =>{
    const ID="radio-"+type+"button";
    return(
        <div className="ri-coaches">
            <label htmlFor={ID}>
                <input className="ric-select" type="radio" id={ID} value={type}/>
                <i className="ric-radio"></i>
                <span>{coach}</span>
            </label>
        </div>
    )
}

const Passengers = ({ passengerType, info, start, end }: any) => {
    return (
        <>
            <div className="passengers">
                <div className="passengers-types">
                    <p className="pt-name">{passengerType}</p>
                    <p className="pt-info">{info}</p>
                </div>
                <div className="p-count">
                    <GenerateButtons start={start} end={end}></GenerateButtons>
                </div>
            </div>
        </>
    );
}

const FlightDetails = () => {

    return (
        <div className="flight-info">
            <div className="flight-info-heading">
                <p>Number of Travellers</p>
            </div>
            <div >
                <Passengers passengerType="Adults" info="12 years & Above (On travel day)" start={1} end={9} />
                <Passengers passengerType="Children" info="2 - 12 years (On travel day)" start={0} end={9} />
                <Passengers passengerType="Infants" info="Under 2 years (On travel day)" start={0} end={9} />
            </div>
            <div className="flight-info-heading">
                <p>Cabin</p>
            </div>
            <div className="radio-inputs">
                <RadioInput type="e" coach="Economy"/>
                <RadioInput type="p" coach="Premium Economy"/>
                <RadioInput type="b" coach="Business"/>
            </div>
        </div>
    )
}

export default FlightDetails;