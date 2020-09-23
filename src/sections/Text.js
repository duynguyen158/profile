import React from 'react';
import ReactMarkdown from 'react-markdown';

function Text({ data, classNames }) {
    const paragraphs = data.map((d, i) => 
        <ReactMarkdown 
            source={d.text} 
            key={d.id ? d.id : i} 
            renderers={{
                link: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
            }}
        />
    );
    const classes = classNames ? `${classNames.join(' ')}` : null;
    return (
        <div className={classes}>
            {paragraphs}
        </div>
    );
}

export default Text;