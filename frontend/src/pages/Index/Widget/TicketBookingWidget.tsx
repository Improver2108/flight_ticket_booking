import React, { useEffect, useRef, useState } from "react";

const TicketBookingWidget = () => {

    const fromDestination = useRef<any>(null);
    const toDestionation = useRef<any>(null);

    const [fromDestinationClick, setFromDestinationClick] = useState<boolean>(false);
    const [toDestinationClick, setToDestinationClick] = useState<boolean>(false);

    const fromHandleOutsideClick = (e: any) => {
        if (fromDestination.current && !fromDestination.current.contains(e.target)) {
            setFromDestinationClick(prevDest => false);
        }
    }
    const toHandleOutsideClick = (e: any) => {
        if (toDestionation.current && !toDestionation.current.contains(e.target)) {
            setToDestinationClick(prevDest => false);
        }
    }

    useEffect(() => {
        document.addEventListener('click',fromHandleOutsideClick, true);
        document.addEventListener('click',toHandleOutsideClick, true);
        return () => {
            document.removeEventListener('click',fromHandleOutsideClick, true);
            document.removeEventListener('click',toHandleOutsideClick, true);
        }
    }, [fromDestinationClick,toDestinationClick])


    const fromDestinationButton = <>
        <span className="mini-text">DEL</span>
        <span className="main-text">NEW DELHI</span>
    </>;

    const destinationInput = <>
        <input type="text" />
    </>;

    const toDestinationButton = <>
        <span className="mini-text">BOM</span>
        <span className="main-text">MUMBAI</span>
    </>


    return (
        <div className="booking-widget">
            <div className="from-destination-container">
                <div ref={fromDestination} className="destination" onClick={e=>setFromDestinationClick(i=>true)}>
                    {!fromDestinationClick ? fromDestinationButton : destinationInput}
                </div>
            </div>
            <div className="to-destination-container">
                <div ref={toDestionation} className="destination" onClick={e=>setToDestinationClick(i=>true)}>
                    {!toDestinationClick ? toDestinationButton : destinationInput}
                </div>
            </div>
            <div className="dates">
                <span>17 Sept</span>
                <span className="day-text">TODAY</span>
            </div>
            <div className="dates">
                <span className="return-date">ADD RETURN</span>
                <span className="plus-button"></span>
            </div>
            <div className="flight-details">
                <span>N TRAVELLERS, </span>
                <span>CLASS</span>
            </div>
            <div className="details-submission">
                <button type="submit">Search</button>
            </div>
        </div>
    )
};
export default TicketBookingWidget;