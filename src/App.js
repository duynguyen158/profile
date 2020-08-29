import React from 'react';

import Hero from './sections/Hero'; 
import heroData from './data/hero.json';

import About from './sections/About';

function App() {
    const [ dims, setDims ] = React.useState({
        height: window.innerHeight
    });


    function handleResize() {
        setDims({
            height: window.innerHeight
        });
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return _ => {
            window.removeEventListener('resize', handleResize);
        };
    })

    return (
        <div>
            <Hero data={heroData} height={dims.height}/>
            <About />
        </div>
    );
}

export default App;
