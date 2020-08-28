import React from 'react';

function Hero(props) {
    const style = { height: props.height };
    return (
        <div className="hero">
            <div className="hero-image" style={style}>
                <div className="hero-text">
                    <h1>{props.name}</h1>
                </div>
            </div>
        </div>
    );
}

export default Hero;