import React, { useState } from "react";
import './FlightDetails.css'

const GenerateButtons = ({selected, start, end ,selectNum}: any) => {
    const buttonNumers = [];

    const setCount =  (num:number)=>{
        if(num!==selected) selectNum(num);
    }
    
    for (let i = start; i <= end; i++) 
        buttonNumers.push(i);
    
    return <>{buttonNumers.map(i => <button 
        key={i} 
        className={'pc-style'+(selected===i?' pc-click':'')} 
        onMouseUp={()=>setCount(i)}>
    {i}</button>)}</>
}

const RadioInput = ({type,coach,radioClick,clickedClass}:any) =>{
    const ID="radio-"+type+"button";
    
    return(
        <div className="ri-coaches" onClick={radioClick}>
            <label htmlFor={ID}>
                <input className="ric-select" type="radio" id={ID} value={type}/>
                <i className={"ric-radio"+clickedClass }></i>
                <span>{coach}</span>
            </label>
        </div>
    )
}

const Passengers = ({ selected, passengerType, info, start, end,selectNum}: any) => {
    return (
        <>
            <div className="passengers">
                <div className="passengers-types">
                    <p className="pt-name">{passengerType}</p>
                    <p className="pt-info">{info}</p>
                </div>
                <div className="p-count">
                    <GenerateButtons selected={selected} start={start} end={end} selectNum={(num:number)=>selectNum(num,passengerType)}></GenerateButtons>
                </div>
            </div>
        </>
    );
}

const FlightDetails = ({selected,selectNum,radioSelected,selectRadio}:any) => { 
    
    const radioClick = (num:number) =>{
        if(num!==radioSelected) selectRadio(num);
    }
    
    return (
        <div className="flight-info">
            <div className="flight-info-heading">
                <p>Number of Travellers</p>
            </div>
            <div >
                <Passengers selected={selected[0]} selectNum={(num:number,passengerType:string)=>selectNum(num,passengerType)} passengerType="Adults" info="12 years & Above (On travel day)" start={1} end={9}/>
                <Passengers selected={selected[1]} selectNum={(num:number,passengerType:string)=>selectNum(num,passengerType)} passengerType="Children" info="2 - 12 years (On travel day)" start={0} end={9}/>
                <Passengers selected={selected[2]} selectNum={(num:number,passengerType:string)=>selectNum(num,passengerType)} passengerType="Infants" info="Under 2 years (On travel day)" start={0} end={9}/>
            </div>
            <div className="flight-info-heading">
                <p>Cabin</p>
            </div>
            <div className="radio-inputs">
                <RadioInput type="e" coach="Economy" radioClick={()=>radioClick(1)} clickedClass={radioSelected===1?' ri-clicked':''}/>
                <RadioInput type="p" coach="Premium Economy" radioClick={()=>radioClick(2)} clickedClass={radioSelected===2?' ri-clicked':''}/>
                <RadioInput type="b" coach="Business" radioClick={()=>radioClick(3)} clickedClass={radioSelected===3?' ri-clicked':''}/>
            </div>
        </div>
    )
}

export default FlightDetails;