import React from 'react';

import Slider from 'react-rangeslider';
import classes from './PriceSlider.css';


const priceSlider = (props) => {
    const {sliderValue, priceUpdate} = props;

    return (
        <div className={classes.PriceSlider}>
            <p>Refine Flight Search</p>

            <Slider
                value={sliderValue}
                min={0}
                max={10000}
                orientation="horizontal"
                onChange={priceUpdate}
            />
            <div className={classes.Range}>
                <span className={classes.Min}>Rs. 0</span>
                <span className={classes.Max}>Rs. 10,000</span>
            </div>
        </div>
    )
}

export default priceSlider;