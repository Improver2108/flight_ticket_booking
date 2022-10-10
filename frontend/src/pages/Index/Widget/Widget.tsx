import React, { useEffect, useRef, useState } from "react";
import './Widget.css'
import Calendar from "./Calendar";
import FlightDetails from "./FlightDetails";

const Widget = () => {

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

    const fromHandleOutsideClick = (e: any) => {
        if (fromDestination.current && !fromDestination.current.contains(e.target))
            setFromDestinationClick(prevDest => false);
    }
    const toHandleOutsideClick = (e: any) => {
        if (toDestionation.current && !toDestionation.current.contains(e.target))
            setToDestinationClick(prevDest => false);
    }
    const fromDateOutsideClick = (e: any) => {
        if (fromDate.current && !fromDate.current.contains(e.target))
            setFromDateClick(i => false);
    }
    const toDateOutsideClick = (e: any) => {
        if (toDate.current && !toDate.current.contains(e.target))
            setToDateClick(i => false);
    }

    const fligtDetailOutsideClick = (e: any) => {
        if (flightDetails.current && !flightDetails.current.contains(e.target))
            setPassengerInfo(i => false);
    }

    useEffect(() => {
        document.addEventListener('click', fromHandleOutsideClick, true);
        document.addEventListener('click', toHandleOutsideClick, true);
        document.addEventListener('click', toDateOutsideClick, true);
        document.addEventListener('click', fromDateOutsideClick, true);
        document.addEventListener('click', fligtDetailOutsideClick, true);
        return () => {
            document.removeEventListener('click', fromHandleOutsideClick, true);
            document.removeEventListener('click', toHandleOutsideClick, true);
            document.addEventListener('click', toDateOutsideClick, true);
            document.addEventListener('click', fromDateOutsideClick, true);
            document.addEventListener('click', fligtDetailOutsideClick, true);
        }
    }, [fromDestinationClick, toDestinationClick, fromDateClick, toDateClick])


    const fromDestinationButton = <>
        <span className="mini-text">DEL</span>
        <span className="main-text">NEW DELHI</span>
    </>;
    const toDestinationButton = <>
        <span className="mini-text">BOM</span>
        <span className="main-text">MUMBAI</span>
    </>
    const destinationInput = <>
        <input className="destination-input" type="text" placeholder="Select Airport" />
    </>;

    return (
        <div className="booking-widget">
            <div className="from-destination-container">
                <div ref={fromDestination} className="destination" onClick={e => setFromDestinationClick(true)}>
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
                        <span>17 Sept</span>
                        <span className="day-text">TODAY</span>
                    </div>
                    <div className="details-container" style={{ left: "-222px", top: "65px" }}>
                        {fromDateClick ?
                            <><Calendar /> <div className="details-arrows" style={{ left: "275px" }}></div> </>
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
                            <> <Calendar />  <div className="details-arrows" style={{ left: "355px" }}></div> </>
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
                            <><FlightDetails /> <div className="details-arrows" style={{left: "60%",backgroundColor:"#f2f2f2"}}></div></>
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