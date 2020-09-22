import React, { useState } from 'react';
//import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'

function Portfolio({ data }) {
    const [ index, setIndex ] = useState(0);

    function handleChange(_, newIndex) {
        setIndex(newIndex);
    }

    return (
        //<Paper>
        <Tabs
            value={index}
            onChange={handleChange}
            centered
        >
            {data.map((d, i) => <Tab key={i} label={d.label} />)}
        </Tabs>
        //</Paper>
    );
}

export default Portfolio;

function Visualizations() {
    
}