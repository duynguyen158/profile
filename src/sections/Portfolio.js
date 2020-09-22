import React, { useState } from 'react';
//import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'

function Portfolio({ data }) {
    // Select first category by default
    const [ currentIndex, setIndex ] = useState(0);

    function handleChange(_, newIndex) {
        setIndex(newIndex);
    }

    const tabs = data.map((d, i) => 
        <Tab key={i} label={d.label} />
    );
    const tabPanels = data.map((d, i) => 
        <TabPanel key={i} value={currentIndex} index={i} data={d} />
    );

    return (
        //<Paper>
        <div>
            <Tabs value={currentIndex} onChange={handleChange} centered>
                {tabs}
            </Tabs>
            {tabPanels}
        </div>
        //</Paper>
    );
}

export default Portfolio;

function TabPanel({ value, index, data }) {
    const Component = getComponent(data.label);

    return (
        <div hidden={value !== index}>
            <Component data={data}/>
        </div>
    );
}

function Visualizations({ data }) {
    return (
        <div>
            {data.label}
        </div>
    );
}

function Articles({ data }) {
    return (
        <div>
            {data.label}
        </div>
    );
}

// ------------HELPERS-------------
function getComponent(label) {
    if (label === "Visualizations") return Visualizations;
    return Articles;
}