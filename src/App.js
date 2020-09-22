import React from 'react';

import Hero from './sections/Hero'; 
import heroData from './data/header/hero.json';

import Text from './sections/Text';
import aboutData from './data/main/about.json';
import farewellData from './data/main/farewell.json';

//import ChartPlaces from './sections/ChartPlaces';
//import RadioFancy from './sections/RadioFancy';
import Portfolio from './sections/Portfolio';
import portfolioData from './data/main/portfolio.json';

function App() {
    return (
        <div className="App">
            <div className="header">
                <Hero data={heroData} />
            </div>
            <div className="main">
                <div>
                    <Text data={aboutData} classNames={['about-me']} />
                    <Text data={farewellData} />
                </div>
                <div>
                    <Portfolio data={portfolioData} />
                </div>
            </div>
        </div>
    );
}

export default App;
// <RadioFancy data={portfolioSelectorData} defaultValue="viz" />