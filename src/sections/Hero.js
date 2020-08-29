import React from 'react';

function Hero(props) {
    const style = { height: props.height };
    return (
        <div className="hero">
            <div className="hero-image" style={style}>
                <Text data={props.data} />
            </div>
        </div>
    );
}

export default Hero;

function Text(props) {
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