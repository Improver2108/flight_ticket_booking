import React, { useState } from "react";
import { DateTime } from "luxon";
import './Calendar.css'

const Dates = ({ counter }: any) => {
    const lisWeekdays: any = ["MON", "TUE", "WED", "THU", "FRI"].map(weekday => <div className="weekdays">{weekday}</div>);
    const lisWeekends: any = ["SAT", "SUN"].map(weekend => <div className="weekends">{weekend}</div>);
    const date = DateTime.now().plus({ months: counter });
    const totalDays = date.daysInMonth;
    const dates = [<div className={(counter === 0 && 1 < date.day) ? 'blackout-dates' : ''} style={{ gridColumnStart: date.startOf('month').weekday }}>1</div>]
    for (let i = 2; i <= totalDays; i++) {
        if (counter === 0 && i < date.day)
            dates.push(<div className="blackout-dates">{i}</div>)
        else
            dates.push(<div>{i}</div>)
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

const Calendar = () => {

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
                        <Dates counter={0}></Dates>
                        <Dates counter={1}></Dates>
                        <Dates counter={2}></Dates>
                        <Dates counter={3}></Dates>
                        <Dates counter={4}></Dates>
                        <Dates counter={5}></Dates>
                        <Dates counter={6}></Dates>
                        <Dates counter={7}></Dates>
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