import React, { useState } from "react";
import { utcParse } from "d3-time-format";
import Text from "./Text";
import linkWrap from "./utilities/linkWrap";

function Visualizations({ data }) {
    const examples = data.examples;
    const cells = examples.map((d, i) => <Cell key={i} data={d} />);
    return <div className="wrap-wide">{cells}</div>;
}

export default Visualizations;

function Cell({ data }) {
    const {
        id,
        title,
        thumbnailType,
        caption,
        date,
        publication,
        tech,
        byline,
        url,
        description,
        shadow,
    } = data;

    const head = <h3>{title}</h3>;
    const thumbnail = (
        <Media id={id} title={title} type={thumbnailType} shadow={shadow} />
    );

    return (
        <div id={id} className="cell">
            <div className="info">
                {url ? linkWrap(head, url) : head}
                <p className="publication">{publication}</p>
                <small className="time">
                    {!date.includes("Coming soon")
                        ? toDateString(parseDate(date))
                        : date}
                </small>
                {byline ? (
                    <div className="credits">
                        <small className="tech">{tech}</small>
                        <br></br>
                        <small className="byline">{byline}</small>
                    </div>
                ) : (
                    <div className="credits">
                        <small className="tech">{tech}</small>
                    </div>
                )}
            </div>
            <Text data={description} classNames={["description"]} />
            {caption ? (
                <div className="thumbnail">
                    {url ? linkWrap(thumbnail, url) : thumbnail}
                    <Text data={[caption]} classNames={["caption"]} />
                </div>
            ) : (
                <div className="thumbnail">
                    {url ? linkWrap(thumbnail, url) : thumbnail}
                </div>
            )}
        </div>
    );
}

function Media({ id, title, type, shadow }) {
    // Hook to store and get URL of thumbnail
    const [mediaUrl, setMediaUrl] = useState(null);

    const folder = type === "mp4" ? "videos" : "images";

    // Fetch thumbnail video
    import(`../media/${folder}/${id}.${type}`).then((media) => {
        setMediaUrl(media.default);
    });

    let media;
    if (type === "mp4") {
        // Will have to make do with dangerouslySetInnerHTML until React resolves the problem
        // of muted not appearing after render: https://github.com/facebook/react/issues/10389
        media = mediaUrl ? (
            <div
                className="vid-wrapper"
                dangerouslySetInnerHTML={{
                    __html: `
                        <video
                            autoplay
                            playsinline
                            loop
                            muted
                            alt="${title}"
                            width="100%"
                            ${shadow ? 'class="shadow"' : ""}
                            src=${mediaUrl}
                        />
                    `,
                }}
            />
        ) : null;
    } else {
        media = (
            <img
                src={mediaUrl}
                alt={title}
                width="100%"
                className={shadow ? "shadow" : null}
            />
        );
    }

    //console.log(`${id} rendered`);

    return media;
}

// ------------HELPERS-------------
const parseDate = utcParse("%m/%d/%y");

function toDateString(date) {
    return date.toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
    });
}
