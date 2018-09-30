import React from 'react';

import Slider from 'react-rangeslider'

const priceSlider = (props) => {

    return (
        <Slider
            orientation="vertical"
            onChange={props.priceUpdate}/>
    )
};

export default priceSlider;