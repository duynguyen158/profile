// --------------- CURRENTLY NOT IN USE. TO USE, PULL OUT OF DEFUNCT FOLDER ---------------- //

/*
import React, { useEffect, useState } from 'react';

let activeVal,       // Value of currently selected option
    prevActiveVal;   // Value of option selected right before the current one

function RadioFancy(props) {
    const data = props.data;
    console.log(data);
    const defaultVal = props.defaultValue;

    // Check if the default option's value, which is stated in and passed from parent component (in this case,
    // App.js), is actually applicable in setting the default option, via two steps:
    // (1) First, check if the default is falsy, e.g. undefined or an empty string. Marginally faster than
    // the next step when props.defaultOptionId isn't specified, but it's good practice ;)
    // (2) Then, if the default's not falsy, check if it's actually included in the list of relevant values.
    const defaultIsApplicable = defaultVal ? data.map(d => d.id).includes(defaultVal) : false;

    // Set default selection based on stated default 
    if (!defaultIsApplicable) {
        activeVal = data[0].value;  // If default is not applicable, 1st option is selected by default
    } else {
        activeVal = defaultVal;
    }

    const buttons = data.map((d, i) => <Option key={i} data={d} />);
    const classes = props.classNames ? `${props.classNames.join(' ')} ` : '';
    console.log("Rendered!")
    const style = {

    };
    return (
        <div className={classes + 'wrap-wide'}>
            {buttons}
        </div>
    );
}

export default RadioFancy;

function Option(props) {
    const data = props.data;
    const [ color, setColor ] = useState(data.value === activeVal ? 'red' : 'black');

    function handleClick() {
        if (data.value !== activeVal) {
            prevActiveVal = activeVal;
            activeVal = data.value;
        }
        if (data.value === activeVal) {
            setColor('red');
        } else {
            setColor('black');
        }
        //console.log(props.data.id);
        console.log([activeVal, prevActiveVal]);
    }

    const style = {
        color
    };

    return (
        <label
            onClick={handleClick}
            style={style}
        >
            {props.data.label}
        </label>
    )
}
*/