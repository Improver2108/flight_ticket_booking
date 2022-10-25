import React, { useEffect, useRef, useState } from "react";
import { DateTime } from "luxon";
import './Widget.css'
import Calendar from "./Calendar";
import FlightDetails from "./FlightDetails";

const Widget = () => {

    const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const fromDestination = useRef<any>(null);
    const toDestionation = useRef<any>(null);
    const fromDate = useRef<any>(null);
    const toDate = useRef<any>(null);
    const flightDetails = useRef<any>(null);

    const [fromDestinationClick, setFromDestinationClick] = useState<boolean>(false);
    const [toDestinationClick, setToDestinationClick] = useState<boolean>(false);
    const [fromDateClick, setFromDateClick] = useState<boolean>(false);
    const [toDateClick, setToDateClick] = useState<boolean>(false);
    const [passengerInfo, setPassengerInfo] = useState<boolean>(false);

    const [fromCity, setFromCity] = useState<string[]>(['DEL', 'New Delhi']);
    const [toCity, setToCity] = useState<string[]>(['BOM', 'Mumbai']);

    const [fromBookingDate, setFromBookingDate] = useState(() => {
        const date = DateTime.now().plus({ day: 1 });
        return [date.year, date.month, date.day];
    });
    const [toBookingDate, setToBookingDate] = useState<number[]>([]);

    const [selected,setSelected]=useState<number[]>([1,0,0]);
    const [radioSelected,setRadioSelected]=useState<number>(1);
    

    const selectedFromDate = (newDate: any) => {
        if (toBookingDate.length>0 && newDate > toBookingDate){
            setFromBookingDate(i=>toBookingDate)
            setToBookingDate(i=>newDate);
        }
        else setFromBookingDate(i => newDate);
        setFromDateClick(i => false);
        setPassengerInfo(i => true);
    }
    const selectedToDate = (newDate: any) => {
        if (newDate < fromBookingDate){
            setToBookingDate(i=>fromBookingDate)
            setFromBookingDate(i=>newDate);
        }
        else setToBookingDate(i => newDate);
        setToDateClick(i => false);
        setPassengerInfo(i => true);
    }

    const selectNum=(num:number,passengerType:String)=>{
        let i:number;
        if(passengerType==='Adults') i=0;
        else if(passengerType==='Children') i=1;
        else i=2;
        const new_selected=selected.map((ele,index)=>(index===i)?num:ele);
        setSelected(i=>new_selected);
    }

    const totalPassengers=()=>{
        let sum=selected.reduce((x,y)=>x+y,0);
        if(sum.toString().length===1) return '0'+sum;
        return sum.toString();    
    }

    const coachClass=()=>{
        if(radioSelected===1) return 'Economy';
        if(radioSelected===2) return 'Premiu...';
        return 'Business';
    }

    const handleOutsideClick = (e: any) => {
        if (fromDestination.current && !fromDestination.current.contains(e.target))
            setFromDestinationClick(prevDest => false);
        if (toDestionation.current && !toDestionation.current.contains(e.target))
            setToDestinationClick(prevDest => false);
        if (fromDate.current && !fromDate.current.contains(e.target))
            setFromDateClick(i => false);
        if (toDate.current && !toDate.current.contains(e.target))
            setToDateClick(i => false);
        if (flightDetails.current && !flightDetails.current.contains(e.target))
            setPassengerInfo(i => false);
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, true);
        return () => {
            document.removeEventListener('click', handleOutsideClick, true);
        }
    }, [fromDestinationClick, toDestinationClick, fromDateClick, toDateClick, passengerInfo])


    const fromDestinationButton = <>
        <span className="mini-text">{fromCity[0]}</span>
        <span className="main-text">{fromCity[1]}</span>
    </>;
    const toDestinationButton = <>
        <span className="mini-text">{toCity[0]}</span>
        <span className="main-text">{toCity[1]}</span>
    </>
    const destinationInput = <>
        <input className="destination-input" type="text" placeholder="Select Airport" />
    </>;

    return (
        <div className="booking-widget">
            <div className="from-destination-container">
                <div ref={fromDestination} className="destination" onClick={e => setFromDestinationClick(i => true)}>
                    {!fromDestinationClick ? fromDestinationButton : destinationInput}
                </div>
            </div>
            <div className="to-destination-container">
                <div ref={toDestionation} className="destination" onClick={e => setToDestinationClick(i => true)}>
                    {!toDestinationClick ? toDestinationButton : destinationInput}
                </div>
            </div>
            <div className="dates">
                <div className="dates-inputs" ref={fromDate} >
                    <div onClick={e => setFromDateClick(i => !i)}>
                        <span>{fromBookingDate[2]} {months[fromBookingDate[1] - 1]}</span>
                        <span className="day-text">TODAY</span>
                    </div>
                    <div className="details-container" style={{ left: "-222px", top: "65px" }}>
                        {fromDateClick ?
                            <><Calendar selectDate={selectedFromDate} dateTime={DateTime} fromDate={fromBookingDate} toDate={toBookingDate} /> <div className="details-arrows" style={{ left: "275px" }}></div> </>
                            : <></>}
                    </div>

                </div>

            </div>
            <div className="dates">
                <div className="dates-inputs" ref={toDate}>
                    <div onClick={e=>{
                        if(toBookingDate.length===0){
                            let date = DateTime.now();
                            date=date.set({day:fromBookingDate[2],month:fromBookingDate[1],year:fromBookingDate[0]}).plus({day:1});
                            setToBookingDate(i=>[date.year,date.month,date.day]);
                        }
                        setToDateClick(i=>!i);
                    }}>
                        {toBookingDate.length ? <>
                            <span>{toBookingDate[2]} {months[toBookingDate[1] - 1]}</span>
                            <span className="day-text">TODAY</span>
                        </> :
                            <>
                                <span className="return-date">Add Return</span>
                                <span className="plus-button"></span>
                            </>}
                    </div>
                    {(toBookingDate.length>0)?<span className="remove-return-date" onClick={()=>setToBookingDate(i=>[])}></span>:<></>}
                    <div className="details-container" style={{ left: "-308px", top: "65px" }}>
                        {toDateClick ?
                            <> <Calendar selectDate={selectedToDate} dateTime={DateTime} fromDate={fromBookingDate} toDate={toBookingDate} />  <div className="details-arrows" style={{ left: "355px" }}></div> </>
                            : <></>}
                    </div>
                </div>

            </div>
            <div className="flight-details" >
                <div className="flight-details-inputs" ref={flightDetails}>
                    <div onClick={e => setPassengerInfo(i => !i)}>
                        <span>{totalPassengers()} Travellers, </span>
                        <span>{coachClass()}</span>
                    </div>
                    <div className="details-container" style={{ top: "65px", left: "-210px" }}>
                        {passengerInfo ?
                            <><FlightDetails radioSelected={radioSelected}  selectRadio={(num:number)=>setRadioSelected(i=>num)} selected={selected} selectNum={selectNum}/> <div className="details-arrows" style={{ left: "60%", backgroundColor: "#f2f2f2" }}></div></>
                            : <></>}
                    </div>
                </div>
            </div>
            <div className="details-submission ">
                <button type="submit">Search</button>
            </div>
        </div>
    )
};
export default Widget;