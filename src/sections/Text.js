import React from 'react';
import ReactMarkdown from 'react-markdown';

function Text({ data, classNames }) {
    const paragraphs = data.map(d => 
        <ReactMarkdown 
            source={d.text} 
            key={d.id} 
            renderers={{
                link: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
            }}
        />
    );
    const classes = classNames ? `${classNames.join(' ')} ` : '';
    return (
        <div className={classes + 'wrap'}>
            {paragraphs}
        </div>
    );
}

export default Text;