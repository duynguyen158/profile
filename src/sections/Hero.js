import React, { useState, useEffect } from "react";

function Hero({ data }) {
    const [height, setHeight] = useState(window.innerHeight);

    // Fired once every time Hero is re-rendered
    useEffect(() => {
        function handleResize() {
            const newHeight = window.innerHeight;

            // Only resize if the change is substantial
            if (Math.abs(newHeight - height) > 80) {
                setHeight(newHeight);
            }
        }

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    const style = { height };

    return (
        <div className="hero">
            <div className="hero-image" style={style}>
                <HeroText data={data} />
            </div>
        </div>
    );
}

export default Hero;

function HeroText({ data }) {
    const email = <a href={"mailto:" + data.email}>Email</a>;
    const links = Object.entries(data.links)
        .map((d, i) => (
            <a key={i} href={d[1]} target="_blank" rel="noopener noreferrer">
                {d[0]}
            </a>
        ))
        .reduce((a, c) => [a, " · ", c]);

    return (
        <div className="hero-text">
            <h1>{data.name}</h1>
            <p>
                {email} · {links}
            </p>
        </div>
    );
}
