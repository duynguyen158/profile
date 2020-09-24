import React, { useState } from 'react';
import { utcParse } from 'd3-time-format';
import Text from './Text';
import linkWrap from './utilities/linkWrap';

function Visualizations({ data }) {
    const examples = data.examples;
    const cells = examples.map((d, i)=> <Cell key={i} data={d} />);
    return (
        <div className="wrap-wide">
            {cells}
        </div>
    );
} 

export default Visualizations;

function Cell({ data }) {
    // Hook to store and get URL of thumbnail
    const [ thumbnailUrl, setThumbnailUrl ] = useState(null);

    const {
        id, title, date, publication, 
        tech, byline, url, description, extraStyle
    } = data;

    // Fetch thumbnail video
    import(`../media/videos/${id}.mp4`).then(video => {
        setThumbnailUrl(video.default);
    });

    const video = (
        <video 
            autoPlay={true} 
            loop={true} 
            muted={true} 
            src={thumbnailUrl} 
            width="100%"
            style={extraStyle}
        ></video>
    );

    return (
        <div id={id} className="cell">
            <div className="info">
                {linkWrap(<h3>{title}</h3>, url)}
                <p className="publication">{publication}</p>
                <small className="time">{toDateString(parseDate(date))}</small>
                <div className="credits">
                    <small className="tech">{tech}</small>
                    <br></br>
                    <small className="byline">{byline}</small>
                </div>
            </div>
            <Text data={description} classNames={['description']} />
            {linkWrap(video, url)}
        </div>
    );
};

// ------------HELPERS-------------
const parseDate = utcParse('%m/%d/%y');

function toDateString(date) {
    return date.toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: 'UTC'
    })
}