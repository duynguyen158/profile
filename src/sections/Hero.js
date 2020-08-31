import React, { useState, useEffect } from 'react';

function Hero(props) {
    const [ dims, setDims ] = useState({ 
            height: window.innerHeight 
    });
    // As long as the list of dependencies included in useEffect() is empty, 
    // declaring handleResize() outside of useEffect() is safe.
    function handleResize() {
        const height = window.innerHeight;
        if (height !== dims.height) {
            setDims({ height });
        }
    }
    // NO dependency array so that it acts as both componentDidMount() and
    // componentWillMount(), fired once every time Hero is re-rendered.
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    const style = { height: dims.height };

    return (
        <div className="hero">
            <div className="hero-image" style={style}>
                <HeroText data={props.data} />
            </div>
        </div>
    );
}

export default Hero;

function HeroText(props) {
    const data = props.data;
    const email = <a href={"mailto:" + data.email}>Email</a>;
    const links = Object
        .entries(data.links)
        .map((d, i) => <a key={i} href={d[1]} target="_blank" rel="noopener noreferrer">{d[0]}</a>)
        .reduce((a, c) => [a, ' · ', c]);

    return (
        <div className="hero-text">
            <h1>{data.name}</h1>
            <p>
                {email} · {links}
            </p>
        </div>
    );
}