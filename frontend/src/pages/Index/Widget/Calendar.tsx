import React, { useState } from "react";
import './Calendar.css'

const Dates = ({ dateTime, currentDate, counter,selectDate}: any) => {
    const lisWeekdays: any = ["MON", "TUE", "WED", "THU", "FRI"].map(weekday => <div className="weekdays">{weekday}</div>);
    const lisWeekends: any = ["SAT", "SUN"].map(weekend => <div className="weekends">{weekend}</div>);
    const date = dateTime.now().plus({ months: counter });
    const totalDays = date.daysInMonth;


    const dates = [<div className={(counter === 0 && 1 < date.day) ? 'blackout-dates' :
        (currentDate[0]===1 && currentDate[1]===date.month)?'higlight-dates':''} 
    style={{ gridColumnStart: date.startOf('month').weekday }} onClick={(counter === 0 && 1 < date.day)?undefined:()=>selectDate([1,date.month,date.year])}>1</div>]

    for (let i = 2; i <= totalDays; i++) {
        if (counter === 0 && i < date.day)
            dates.push(<div className="blackout-dates">{i}</div>)
        else
            dates.push(<div className={currentDate[0]==i && currentDate[1]===date.month?'higlight-dates':''} onClick={()=>selectDate([i,date.month,date.year])}>{i}</div>)
    }

    return (
        <div className="calendar-dates">
            <div >
                <div className="month-name">
                    <p>{date.toLocaleString({ month: "long", year: "numeric" })}</p>
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

const Calendar = ({dateTime,currentDate,selectDate}:any) => {
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
                        {[...Array(8)].map((i,index)=><Dates selectDate={(date:any)=>selectDate(date)} dateTime={dateTime} currentDate={currentDate} counter={index}/>)}
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