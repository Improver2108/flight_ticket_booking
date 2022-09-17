import React from "react";

const TicketBookingWidget=()=>{
    return(
        <div className="booking-widget">
            <div className="from-destination-container">
                <div className="destination">
                    <span className="mini-text">DEL</span>
                    <span className="main-text">NEW DELHI</span>
                </div>
            </div>
            <div className="to-destination-container">
                <div className="destination">
                    <span className="mini-text">BOM</span>
                    <span className="main-text">MUMBAI</span>
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
                <button>Search</button>
            </div>            
        </div> 
    )
};
export default TicketBookingWidget;