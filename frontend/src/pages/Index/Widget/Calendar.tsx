import React from "react";
import { DateTime } from "luxon";
import './Calendar.css'

const Calendar = () => {
    // var mL:string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // var mS:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const lisWeekdays: any = ["MON", "TUE", "WED", "THU", "FRI"].map(weekday => <div className="weekdays">{weekday}</div>);
    const lisWeekends: any = ["SAT", "SUN"].map(weekend => <div className="weekends">{weekend}</div>);
    let date = DateTime.now();
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
                    <div className="calendar-dates">
                        <div className="month-name">
                            <p>{date.toLocaleString({ month: "long", year: "numeric" })}</p>
                        </div>
                        <div className="weeks">
                            {lisWeekdays}
                            {lisWeekends}
                        </div>
                        <div className="day-number">
                            
                        </div>
                    </div>

                    <div className="calendar-dates">
                        <div className="month-name">
                            <p>{date.plus({ months: 1 }).toLocaleString({ month: "long", year: "numeric" })}</p>
                        </div>
                        <div className="weeks">
                            {lisWeekdays}
                            {lisWeekends}
                        </div>
                    </div>
                </div>
            </div>
            <div className="price-information">
                <p>Fares indicate price for 1 Adult and Economy Class in INR and are subject to change</p>
            </div>
        </div>
    );
}
export default Calendar 