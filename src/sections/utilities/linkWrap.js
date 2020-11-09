import React from "react";

function linkWrap(Component, url) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {Component}
        </a>
    );
}

export default linkWrap;
