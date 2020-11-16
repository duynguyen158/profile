import React, { useState, useEffect, useRef } from "react";
import Visualizations from "./Visualizations";
import Writings from "./Writings";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function Portfolio({ data }) {
    // Select first category by default
    const [currentIndex, setIndex] = useState(0);

    // Handles selection between different categories, using index
    function handleChange(_, newIndex) {
        setIndex(newIndex);
    }

    const tabPanels = data.map((d, i) => (
        <TabPanel key={i} value={currentIndex} index={i} data={d} />
    ));

    return (
        <div className="portfolio">
            <Selector
                labels={data.map((d) => d.label)}
                value={currentIndex}
                onChange={handleChange}
            />
            <div className="tab-panels">{tabPanels}</div>
        </div>
    );
}

export default Portfolio;

function Selector({ labels, value, onChange }) {
    const tabs = labels.map((d, i) => <Tab key={i} label={d} />);

    const [shadow, setShadow] = useState(false);
    const ref = useRef(null);

    // Fired once every time Selector is re-rendered, which happens as a result
    // of "shadow" changing from null to '0 2px 4px rgba(0,0,0,.1)', or vice versa.
    useEffect(() => {
        // Set box shadow of Tabs section based on its y-position,
        // i.e. depending on scrolling
        function handleScroll() {
            if (ref.current) {
                // Get the y-position. Since we're wrapping the Tabs section
                // with the wrap-sticky class, where we set "position" to be "sticky",
                // and "top" to be 0, y will always be greater than or equal to 0.
                // (See: index.css.)
                const y = ref.current.getBoundingClientRect().top;

                if (y === 0) {
                    // Tabs section is at the top of viewport
                    if (!shadow) setShadow(true);
                } else {
                    // Tabs section is about to come to top of viewport
                    setShadow(false);
                }
            }
        }

        window.addEventListener("scroll", handleScroll);

        // Cleaning to prevent memory leak.
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <div className={`tabs wrap-sticky${shadow ? " shadow" : ""}`} ref={ref}>
            <Tabs value={value} onChange={onChange} centered>
                {tabs}
            </Tabs>
        </div>
    );
}

// TODO: Remember where you scrolled. Disable video link on mobile.
function TabPanel({ value, index, data }) {
    const Component = getComponent(data.label);

    return (
        <div hidden={value !== index}>
            <Component data={data} />
        </div>
    );
}

// ------------HELPERS-------------
function getComponent(label) {
    if (label === "Visualizations") return Visualizations;
    return Writings;
}
