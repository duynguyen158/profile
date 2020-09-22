// --------------- CURRENTLY NOT IN USE. TO USE, PULL OUT OF DEFUNCT FOLDER ---------------- //

/*
import React, { useRef, useState, useEffect } from 'react';
import Caption from './Caption';
import { csv } from 'd3-fetch';
import { select } from 'd3-selection';
import { geoPath, geoEqualEarth } from 'd3-geo';
import { feature, mesh } from 'topojson-client';

import world from '../data/main/countries-50m.json';
import dataUrl from '../data/main/places.csv';

function ChartPlaces(props) {  
    const container = useRef(null);     // Holds on to the SVG DOM element to pass it later to d3
    const width = 975;
    const height = 475;

    const [ data, setData ] = useState([]);

    // Fetch data.
    // EMPTY dependency array because only need to run once 
    useEffect(
        () => {
            csv(dataUrl).then(data => {
                setData(data);
            });
        },
        []
    );

    // Draw chart.
    // NO dependency array because need to run exactly twice, as ChartPlaces will render twice
    // because of useState():
    // (1) when data is initialized as an empty array, and (2) when data is updated
    useEffect(() => {
        const countries = feature(world, world.objects.countries);
        const outline = { type: 'Sphere' };
        const projection = geoEqualEarth()
            .fitSize([width, height], outline);
        const path = geoPath(projection);

        const svg = select(container.current)

        const g = svg.append('g');
        g.append('g')
            .selectAll('path')
            .data(countries.features)
            .join('path')
            .attr('fill', '#d4c6b4')
            .attr('d', path);
        g.append("path")
            .datum(mesh(world, world.objects.countries, (a, b) => a !== b))
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", 0.5)
            .attr("stroke-linejoin", "round")
            .attr("d", path);
        // When data is updated
        if (data.length !== 0) {
            g.append('g')
                .selectAll('circle')
                .data(data)
                .join('circle')
                .attr('transform', d => `translate(${projection([+d.long, +d.lat])})`)
                .attr('r', 2.5)
                .attr('fill', '#d60404')
                .attr('fill-opacity', 0.8)
                .append('title')
                .text(d => `${d.city}, ${d.country}`);
        }
    });

    const classes = prop.classNames ? props.classNames.join(' ') : [];
    const style = {
        display: "block"
    };
    // Putting viewBox and style.display directly inside the SVG tags, as opposed to 
    // attaching them to the svg variable declaration in the 2nd useEffect(), immediately 
    // creates a container just big enough for our chart before it's rendered.  
    // RESULT: When the chart is actually rendered, components below it don't get awkwardly pushed down/up.
    return (
        <div className={'wrap-wide ' + classes}>
            <svg 
                ref={container} 
                viewBox={[0, 0, width, height]} 
                style={style}
            ></svg>
            <Caption text="Places I've visited. Not a lot, but I'm not nearly finished." />
        </div>
    )
}

export default ChartPlaces;
*/