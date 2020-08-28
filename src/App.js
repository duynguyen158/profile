import React from 'react';
import Hero from './sections/Hero'; 
import heroData from './data/hero.json';

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
            <Hero name={heroData.name} height={dims.height}/>
        </div>
    );
}

export default App;
