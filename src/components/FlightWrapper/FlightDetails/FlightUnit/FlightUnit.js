import React from 'react';
import classes from './FlightUnit.css'


const flightUnit = (props) => {
    let returnFlight, currentPrice = null;
    const oneWayObj = props.oneWayDetailsArray && props.oneWayDetailsArray[props.currentDetailObj];
    const returnObj = props.returnDetailsArray && props.returnDetailsArray[props.currentDetailObj];

    if (returnObj && props.returnFlightFlag) {
        currentPrice = parseInt(oneWayObj.price) + (parseInt(returnObj.price) || 0);
        currentPrice = currentPrice * parseInt(props.customerDetailsObj.passenger);
    } else {
        currentPrice = parseInt(oneWayObj.price) * parseInt(props.customerDetailsObj.passenger);
    }


    if (props.returnFlightFlag && returnObj) {
        returnFlight = (
            <div className={classes.FlightSummary}>
                <p className={classes.FlightNumber}>{returnObj.flightNumber}</p>
                <p className={classes.FlightElm}><span>{returnObj.originCode}</span> >
                    <span>{returnObj.destinationCode}</span></p>
                <p className={classes.FlightElm}>Depart {returnObj.departureTime}</p>
                <p className={classes.FlightElm}>Arrive {returnObj.ArrivalTime}</p>
            </div>
        )
    }

    let flightUnitDom =null;
    if (currentPrice <= props.priceSliderValue) {
        flightUnitDom = (
            <div className={classes.FlightUnit}>
                <p className={classes.PriceBlock}>Rs. {currentPrice.toFixed(2)}</p>

                <div className={classes.SummaryWrapper}>
                    <div className={classes.FlightSummary}>
                        <p className={classes.FlightNumber}>{oneWayObj.flightNumber}</p>
                        <p className={classes.FlightElm}><span>{oneWayObj.originCode}</span> >
                            <span>{oneWayObj.destinationCode}</span></p>
                        <p className={classes.FlightElm}>Depart {oneWayObj.departureTime}</p>
                        <p className={classes.FlightElm}>Arrive {oneWayObj.ArrivalTime}</p>
                    </div>

                    {returnFlight}

                    <div className={classes.BoxWrap}>
                        <div className={classes.Box}></div>
                        <button className={classes.BookFlight}>Book Flight</button>
                    </div>
                </div>
            </div>
        )
    }else{
        flightUnitDom = (
            <div className={classes.FlightUnit}>
                <p className={classes.PriceBlock}>Flights are not in range !! Refine Flight Search </p>
            </div>
        )
    }

    return (
        <div>
            {flightUnitDom}
        </div>
    )

};

export default flightUnit;