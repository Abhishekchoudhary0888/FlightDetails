import React, {PureComponent} from 'react';
import FlightHeader from './FlightHeader/FlightHeader';
import FlightDetails from './FlightDetails/FlightDetails';
import classes from './FlightWrapper.css';

class FlightWrapper extends PureComponent{
    render(){
        let flightWrapper = null;
        const {
            oneWayflightDetails,
            returnflightDetails,
            customerDetailsObj,
            priceSliderValue,
            returnFlight} = this.props;

        if (!oneWayflightDetails) {
            flightWrapper = (<div className={classes.FlightWrapperEmpty}> Data Not Available</div>)
        } else {
            flightWrapper = (
                <div className={classes.FlightWrapper}>
                    <FlightHeader returnFlight={returnFlight}
                                  oneWayflightDetails={oneWayflightDetails}
                                  returnflightDetails={returnflightDetails} />
                    <FlightDetails returnFlight={returnFlight}
                                   priceSliderValue = {priceSliderValue}
                                   customerDetailsObj={customerDetailsObj}
                                   oneWayflightDetails={oneWayflightDetails}
                                   returnflightDetails={returnflightDetails} />
                </div>
            )
        }

        return flightWrapper;
    }
}

export default FlightWrapper;

