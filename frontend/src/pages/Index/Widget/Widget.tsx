import React, { useEffect, useRef, useState } from "react";
import { DateTime } from "luxon";
import './Widget.css'
import Calendar from "./Calendar";
import FlightDetails from "./FlightDetails";

const Widget = () => {

    const months:string[]=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];

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

    const [fromCity,setFromCity]=useState<string[]>(['DEL','New Delhi']);
    const [toCity,setToCity]=useState<string[]>(['BOM','Mumbai']);
    

    const [fromBookingDate,setFromBookingDate] = useState(DateTime.now().plus({days:1}));


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
                <div ref={fromDestination} className="destination" onClick={e => setFromDestinationClick(i=>true)}>
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
                        <span>{fromBookingDate.toLocaleString({day:'numeric',month:'short'})}</span>
                        <span className="day-text">TODAY</span>
                    </div>
                    <div className="details-container" style={{ left: "-222px", top: "65px" }}>
                        {fromDateClick ?
                            <><Calendar dateTime={DateTime} currentDate={fromBookingDate}/> <div className="details-arrows" style={{ left: "275px" }}></div> </>
                            : <></>}
                    </div>

                </div>

            </div>
            <div className="dates">
                <div className="dates-inputs" ref={toDate}>
                    <div onClick={e => setToDateClick(i => !i)}>
                        <span className="return-date">ADD RETURN</span>
                        <span className="plus-button"></span>
                    </div>
                    <div className="details-container" style={{ left: "-308px", top: "65px" }}>
                        {toDateClick ?
                            <> <Calendar dateTime={DateTime} currentDate={fromBookingDate} />  <div className="details-arrows" style={{ left: "355px" }}></div> </>
                            : <></>}
                    </div>
                </div>

            </div>
            <div className="flight-details" >
                <div className="flight-details-inputs" ref={flightDetails}>
                    <div onClick={e => setPassengerInfo(i => !i)}>
                        <span>N TRAVELLERS, </span>
                        <span>CLASS</span>
                    </div>
                    <div className="details-container" style={{ top: "65px", left: "-210px" }}>
                        {passengerInfo ?
                            <><FlightDetails /> <div className="details-arrows" style={{ left: "60%", backgroundColor: "#f2f2f2" }}></div></>
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