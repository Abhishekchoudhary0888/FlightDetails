import React from 'react';
import classes from './Header.css'

const header = (props) => {
    return (
        <div className={classes.Header}>
            <h1> Flight Search Engine</h1>
        </div>
    )
};

export default header;