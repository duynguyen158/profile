import React from 'react';

function Caption(props) {
    return (
        <div className="caption">
            <small>{props.text}</small>
        </div>
    );
}

export default Caption;