import React, { useState } from 'react';
import { utcParse } from 'd3-time-format';
import Text from './Text';
import linkWrap from './utilities/linkWrap';

function Articles({ data }) {
    const examples = data.examples;
    const cells = examples.map((d, i) => <Cell key={i} data={d} />)
    return (
        <div className="wrap">
            {cells}
        </div>
    );
} 

export default Articles;

function Cell({ data }) {
    // Hook to store and get URL of thumbnail
    const [ thumbnailUrl, setThumbnailUrl ] = useState(null);

    const {
        id, title, date, publication, 
        url, description, extraStyle
    } = data;

    // Fetch thumbnail
    import(`../media/images/${id}.jpg`).then(image => {
        setThumbnailUrl(image.default);
    });

    const style = {
        marginBottom: '1em',
        borderRadius: '3px'
    };
    const image = (
        <img  
            src={thumbnailUrl} 
            alt={title}
            width="100%"
            style={Object.assign(style, extraStyle)}
        />
    );

    return (
        <div id={id} className="cell">
            {linkWrap(image, url)}
            <div className="info">
                {linkWrap(<h3>{title}</h3>, url)}
                <p className="publication">{publication}</p>
                <small className="time">{toDateString(parseDate(date))}</small>
            </div>
            <Text data={description} classNames={['description']} />
        </div>
    );
}

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