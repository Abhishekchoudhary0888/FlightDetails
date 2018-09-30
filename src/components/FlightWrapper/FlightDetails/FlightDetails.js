import React from 'react';

import classes from './FlightDetails.css'

import FlightUnit from './FlightUnit/FlightUnit';

const flightDetails = (props) => {

    let mainDetails = Object.keys(props.oneWayflightDetails).map((obj,index) => {
        return  <FlightUnit
                    key={index}
                    returnFlightFlag={props.returnFlight}
                    customerDetailsObj={props.customerDetailsObj}
                    currentDetailObj = {obj}
                    priceSliderValue={props.priceSliderValue}
                    oneWayDetailsArray={props.oneWayflightDetails}
                    returnDetailsArray={props.returnflightDetails} />
    });

    return (
        <div className={classes.FlightDetails}>
            {mainDetails}
        </div>
    )
};

export default flightDetails;