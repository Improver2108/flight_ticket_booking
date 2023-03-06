import React, { useState } from "react";
import './Calendar.css'

const Dates = ({ dateTime, fromDate,toDate,counter,selectDate}: any) => {
    const lisWeekdays: any = ["MON", "TUE", "WED", "THU", "FRI"].map(weekday => <div className="weekdays">{weekday}</div>);
    const lisWeekends: any = ["SAT", "SUN"].map(weekend => <div className="weekends">{weekend}</div>);
    const Date = dateTime.now().plus({ months: counter });
    const totalDays = Date.daysInMonth;

    const checkBetweenDates=(date:any)=>{
        let d=dateTime.now().set({day:date[2],month:date[1],year:date[0]}).startOf('day')
        let d1=dateTime.now().set({day:fromDate[2],month:fromDate[1],year:fromDate[0]}).startOf('day')
        let d2=dateTime.now().set({day:toDate[2],month:toDate[1],year:toDate[0]}).startOf('day')
        if(d>d1 && d<d2) return true;
        return false;
    }

    const isEqualDates=(date:any)=>{
        if(toDate[2]===date[2] && toDate[1]===date[1] || fromDate[2]===date[2] && fromDate[1]===date[1]) return true;
        return false
    }
    
    const dates = [<div className={(counter === 0 && 1 < Date.day) ? 'blackout-dates' :
        isEqualDates([Date.year,Date.month,1])?'higlight-dates':
        checkBetweenDates([Date.year,Date.month,1])?'middle-highlight-dates':''}

    style={{ gridColumnStart: Date.startOf('month').weekday }} onClick={(counter === 0 && 1 < Date.day)?undefined:()=>selectDate([Date.year,Date.month,1])}>1</div>]

    for (let i = 2; i <= totalDays; i++) {
        if (counter === 0 && i < Date.day)
            dates.push(<div key={i} className="blackout-dates">{i}</div>)
        else{
            dates.push(<div key={i} className={isEqualDates([Date.year,Date.month,i])?'higlight-dates':
                checkBetweenDates([Date.year,Date.month,i])?'middle-highlight-dates':''} 
                onClick={()=>selectDate([Date.year,Date.month,i])}>{i}</div>)
        }            
    }

    return (
        <div className="calendar-dates">
            <div >
                <div className="month-name">
                    <p>{Date.toLocaleString({ month: "long", year: "numeric" })}</p>
                </div>
                <div className="weeks">
                    {lisWeekdays}
                    {lisWeekends}
                </div>
                <div className="day-number">
                    <div className="weekend-dates"></div>
                    <div className="day-grid">
                        {dates.map(date => <>{date}</>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Calendar = ({dateTime,fromDate,toDate,selectDate}:any) => {
    const [shift, setShift] = useState(0);
    const translateX: string = "translateX(" + shift + "px)";
    const rightSlider = (e: any) => {
        if (shift !== -768 * 3)
            setShift(preShift => preShift - 768);
    }


    const leftSlider = (e: any) => {
        if (shift !== 0)
            setShift(preShift => preShift + 768);
    }

    return (
        <>
            <div className="container">
                <button className="left-slider" onClick={leftSlider}>
                    <div className="left-slider-layout" ></div>
                </button>
                <button className="right-slider" onClick={rightSlider}>
                    <div className="right-slider-layout" ></div>
                </button>
                <div className="calendar-layout">
                    <div className="inner-calendar-layout" style={{ transform: translateX }}>
                        {[...Array(8)].map((i,index)=><Dates key={i} selectDate={(date:any)=>selectDate(date)} dateTime={dateTime} fromDate={fromDate} toDate={toDate} counter={index}/>)}
                    </div>
                </div>
                <div className="price-information" >
                    <p>Fares indicate price for 1 Adult and Economy Class in INR and are subject to change</p>
                </div>
            </div>
            
        </>

    );
}
export default Calendar