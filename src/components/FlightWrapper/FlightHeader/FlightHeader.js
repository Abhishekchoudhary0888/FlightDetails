import React from 'react';
import classes from './FlightHeader.css';

const flightHeader = (props) => {
    const oneWayflight = props.oneWayflightDetails && props.oneWayflightDetails['details'];
    const returnflightDetail = props.returnflightDetails && props.returnflightDetails['details'];


    let returnFlightDestination, returnFlightDate = null;
    if (props.returnFlight && returnflightDetail) {
        returnFlightDestination = (<span> > {returnflightDetail['destination']} </span>);
        returnFlightDate = (<p>Return : {returnflightDetail['date']}</p>)
    }

    return (
        <div className={classes.FlightHeader}>
            <div className={classes.CityDetail}>
                <span>{oneWayflight['origin']} > </span>
                <span>{oneWayflight['destination']}</span>
                {returnFlightDestination}
            </div>

            <div className={classes.DateDetais}>
                <p> Depart : {oneWayflight['date']}</p>
                {returnFlightDate}
            </div>
        </div>
    )
};

export default flightHeader;