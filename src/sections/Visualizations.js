import React, { useState } from 'react';
import { utcParse } from 'd3-time-format';
import Text from './Text';

function Visualizations({ data }) {
    const examples = data.examples;
    const cells = examples.map((d, i)=> <Cell key={i} data={d} />);
    return (
        <div>
            {cells}
        </div>
    );
} 

export default Visualizations;

function Cell({ data }) {
    const [ url, setUrl ] = useState(null);

    import(`../media/videos/${data.id}.mp4`).then(video => {
        setUrl(video.default);
    });

    const style = {
        width: '100%',
    };
    const video = (
        <video 
            autoPlay={true} 
            loop={true} 
            muted={true} 
            src={url} 
            style={Object.assign(style, data.extraStyle)}
        ></video>
    );

    //console.log("rendered");

    return (
        <div id={data.id} className="cell">
            <div className="info">
                {linkWrap(<h3>{data.title}</h3>, data.url)}
                <p className="publication">{data.publication}</p>
                <small className="time">{toDateString(parseDate(data.date))}</small>
                <div className="credits">
                    <small className="tech">{data.tech}</small>
                    <br></br>
                    <small className="byline">{data.byline}</small>
                </div>
            </div>
            <Text data={data.description} classNames={['description']} />
            {linkWrap(video, data.url)}
        </div>
    );
};

// ------------HELPERS-------------
function linkWrap(Component, url) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {Component}
        </a>
    );
}

const parseDate = utcParse('%m/%d/%y');

function toDateString(date) {
    return date.toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: 'UTC'
    })
}