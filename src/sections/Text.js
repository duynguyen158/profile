import React from 'react';
import ReactMarkdown from 'react-markdown';

function Text(props) {
    const paragraphs = props.data.map(d => 
        <ReactMarkdown 
            source={d.text} 
            key={d.id} 
            renderers={{link: props => <a href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>}}
        />
    );
    const classes = props.classNames.join(" ");
    return (
        <div className={classes + ' wrap'}>
            {paragraphs}
        </div>
    );
}

export default Text;