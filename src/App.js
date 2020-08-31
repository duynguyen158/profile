import React from 'react';

import Hero from './sections/Hero'; 
import heroData from './data/header/hero.json';

import Text from './sections/Text';
import aboutData from './data/main/about.json';
import farewellData from './data/main/farewell.json';

import ChartPlaces from './sections/ChartPlaces';

function App() {
    return (
        <div className="App">
            <div className="header">
                <Hero data={heroData} />
            </div>
            <div className="main">
                <div>
                    <Text data={aboutData} classNames={['about-me']} />
                    <ChartPlaces classNames={['chart-places']}/>
                    <Text data={farewellData} classNames={['about-me-2']} />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default App;
